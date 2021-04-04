import React, {useContext, useEffect, useState} from 'react'
import ItemCount from "./ItemCount";
import {Link, useParams} from "react-router-dom";
import {CartContext} from "../context/CartContext";
import * as utils from "../utils/constants";

function ItemDetail(props) {
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(5);
    const [cart, setCart] = useState(0)
    const [item, setItem] = useState();

    const {itemId} = useParams();
    const context = useContext(CartContext)


    useEffect(() => {
        if (props) {
            let item = findItem(itemId, getItems())
            setItem(item)
        }
    })

    const getItems = () => {
        return utils.mockedItemList
    }

    const findItem = (itemId, items) => {
        let foundItem = null;
        for (let key in items) {
            if (items[key].id == itemId) {
                foundItem = items[key];
                break;
            }
        }
        return foundItem
    }


    const onAdd = (event) => {
        if (count < stock) {
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
        setCart(count)
        setCount(0)
        addToCart()
    };

    const addToCart = () => {
        let newItem = {
            id: item ? item.id : props.id,
            title: item ? item.title : props.title,
            pictureUrl: item ? item.pictureUrl : props.pictureUrl,
            price: item ? item.price : props.price
        }
        context.addItem(newItem, count)
    }

    return (
        <div id={item ? item.id : props.id}>
            <h5>{item ? item.title : props.title}</h5>
            <img src={item ? item.pictureUrl : props.pictureUrl} alt=""/>
            <p>${item ? item.price : props.price}</p>
            {stock > 0 &&
            <ItemCount stock={stock} count={count} onAdd={onAdd} onSubtract={onSubtract} onPurchase={onPurchase}/>
            }
            <Link to={"/cart"}>
                <button onClick={addToCart}>Terminar mi compra</button>
            </Link>
        </div>

    )
}

export default ItemDetail