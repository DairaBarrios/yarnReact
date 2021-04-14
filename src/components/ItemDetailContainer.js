import React, {useContext, useEffect, useState} from 'react'
import ItemDetail from "./ItemDetail";
import * as utils from "../utils/constants";
import {useParams} from "react-router-dom";
import {CartContext} from "../context/CartContext";
import {getFirestore} from "../firebase";

function ItemDetailContainer(props) {
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(5);
    const [item, setItem] = useState();
    const {itemId} = useParams();
    const context = useContext(CartContext)

    useEffect(() => {
            const db = getFirestore()
            const itemCollection = db.collection("items")
            itemCollection.doc(itemId).get().then((doc) => {
                if (doc != null) {
                    setItem({id: doc.id, ...doc.data()})
                    setStock(doc.data().stock)
                }
            })
    }, [])

    const onAdd = (event) => {
        if (count < item.stock) {
            setCount(prevCount => Number(prevCount) + 1);
        }
    };

    const onSubtract = (event) => {
        if (count > 0) {
            setCount(prevCount => Number(prevCount) - 1);
        }
    };

    const onPurchase = (event) => {
        setStock(prevStock => Number(prevStock) - Number(count))
        setCount(0)
        addToCart()
    };

    const addToCart = () => {
        let newItem = {
            id: item && item.id,
            title: item && item.title,
            pictureUrl: item && item.pictureUrl,
            price: item && item.price
        }
        context.addItem(newItem, count)
    }

    return (
        <div>
            {item &&
            <ItemDetail id={item.id} title={item.title} pictureUrl={item.pictureUrl} price={item.price} stock={stock}
                        count={count}
                        onAdd={onAdd} onSubtract={onSubtract} onPurchase={onPurchase} onClick={addToCart}></ItemDetail>}
        </div>
    )
}

export default ItemDetailContainer
