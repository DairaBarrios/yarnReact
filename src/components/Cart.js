import React, {useContext} from 'react'
import {CartContext} from "../context/CartContext";
import {Link} from "react-router-dom";

function Cart() {

    const context = useContext(CartContext)
    let total = 0

    const items = context.getItems()

    return (
        <>
            <h1>Tu carrito</h1>
            <div>
                {items.length > 0 ? items.map(item =>
                    <>
                        <div>
                            <h2>{item.item.title}</h2>
                            <p>{total += item.item.price * item.quantity}</p>
                            <button onClick={() => {
                                context.removeItem(item.item.id)
                            }}>eliminar
                            </button>
                        </div>
                        <p>Total :${total}</p>
                    </>
                ) :
                <div>
                    <h2>No hay productos</h2>
                    <Link to={'/category/mantas'}><button>Seguir comprando</button></Link>
                </div>}
            </div>
        </>
    )
}

export default Cart