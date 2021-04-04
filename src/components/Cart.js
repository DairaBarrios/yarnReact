import React, {useContext} from 'react'
import {CartContext} from "../context/CartContext";

function Cart() {

    const context = useContext(CartContext)

    return (
        <>
            <h1>Tu carrito</h1>
            <div>
                {context.getItems().length > 0 ? context.getItems().map(item =>
                    <div>
                        <h2>{item.item.title}</h2>
                        <p>{item.item.price * item.quantity}</p>
                    </div>
                ) : <h2>No hay productos</h2>}
            </div>
        </>
    )
}

export default Cart