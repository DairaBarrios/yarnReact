import {createContext, useState} from "react";

export const CartContext = createContext([])

export default function CartContextProvider ({ defaultValue = [], children}) {
    const [cart, setCart] = useState([])

    function getItems() {
        return cart
    }

    function addItem(item, q) {
        let productIndex = cart.findIndex((cartItem) => { return cartItem.item.id === item.id})
        if (productIndex >= 0) {
            let items = cart
            items[productIndex].quantity += q
            setCart([...items])
        } else {
            let cartItem = {
                item: item,
                quantity: q
            }
            setCart([...cart, cartItem])
        }
    }

    function removeItem(itemId) {
        if (isInCart(itemId)) {
            setCart([...cart.filter((item) => item.item.id !== itemId)])
        }
    }

    function clear() {
        setCart([])
    }

    function isInCart(itemId) {
        return cart.find(item => item.item.id == itemId)
    }

    return <CartContext.Provider value={{cart, getItems, addItem, removeItem, clear, isInCart}}>
        {children}
    </CartContext.Provider>
}