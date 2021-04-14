import React, {useContext, useState} from 'react'
import {CartContext} from "../context/CartContext";
import {getFirestore} from "../firebase";
import firebase from "firebase/app";

function Checkout() {

    const context = useContext(CartContext)
    const cartItems = context.getItems()

    const [formData, setFormData] = useState({name: "", email: "", phone: ""})
    const [order, setOrder] = useState()

    const db = getFirestore()
    const orders = db.collection("orders")
    const items = db.collection("items")

    const purchase = async () => {
        const itemsStatus = await checkStock()
        if (itemsStatus.outOfStock.length > 0) {
            console.log("Se quitaron los siguientes items fuera de stock:")
            itemsStatus.outOfStock.forEach(i => {
                console.log(i.item.title)
            })
        }
        let total = price(itemsStatus.inStock)
        const batch = db.batch()
        for (const i of itemsStatus.inStock) {
            const ref = items.doc(i.item.id)
            const decrement = firebase.firestore.FieldValue.increment(-i.quantity)
            batch.update(ref, {stock: decrement})
        }
        const order = {
            buyer: {
                name: formData.name,
                phone: formData.phone,
                email: formData.email
            },
            items: itemsStatus.inStock,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total
        }
        let orderId = orders.doc()
        batch.set(orderId, order)
        await batch.commit().then(() => {
            setOrder(orderId.id)
        })
    }

    // checkStock returns a json with stock items and out of stock items keys
    const checkStock = async () => {
        const inStock = []
        const outOfStock = []
        for (const i of cartItems) {
            let ref = items.doc(i.item.id)
            let itemDoc = await ref.get()
            i.quantity <= itemDoc.data().stock ? inStock.push(i) : outOfStock.push(i)
        }
        return {
            inStock: inStock,
            outOfStock: outOfStock
        }
    }

    const price = (items) => {
        let price = 0
        items.forEach(i => {
            price += i.item.price * i.quantity
        })
        return price
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }


    return (
        <>
            {!order ?
                <>
                    <h1>Ingresa tus datos</h1>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id='name' name="name" onChange={handleChange}></input>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id='email' name="email" onChange={handleChange}></input>
                    <label htmlFor="phone">Telefono:</label>
                    <input type="phone" id='phone' name="phone" onChange={handleChange}></input>
                    <button onClick={purchase}>Pagar</button>
                </>
                :
                <>
                    <h1>Gracias por tu compra</h1>
                    <p>Tu numero de referencia es: {order}</p>
                </>}
        </>
    )
}

export default Checkout