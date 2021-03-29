import React, {useEffect, useState} from 'react'
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom";

function ItemDetail(props) {
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(5);
    const [cart, setCart] = useState(0);

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
    };

    return (
        <div>
            <h5>{props.description}</h5>
            <img src={props.photoUrl} alt=""/>
            <p>${props.price}</p>
            {stock > 0 &&
                <ItemCount stock={stock} count={count} onAdd={onAdd} onSubtract={onSubtract} onPurchase={onPurchase}/>
            }
            {props.requestedItems == cart &&
            <Link to={"/cart"}><button>Terminar mi compra</button></Link>
            }
        </div>

    )
}

export default ItemDetail