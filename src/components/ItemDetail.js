import React from 'react'
import ItemCount from "./ItemCount";
import {Link} from "react-router-dom";

function ItemDetail(props) {

    return (
        <div id={props.id}>
            <h5>{props.title}</h5>
            <img src={props.pictureUrl} alt=""/>
            <p>${props.price}</p>
            {props.stock > 0 &&
            <ItemCount stock={props.stock} count={props.count} onAdd={props.onAdd} onSubtract={props.onSubtract} onPurchase={props.onPurchase}/>
            }
            {props.stock < 1 &&
            <p>No hay mas stock</p>
            }
            <Link to={"/cart"}>
                <button onClick={props.addToCart}>Terminar mi compra</button>
            </Link>
        </div>

    )
}

export default ItemDetail