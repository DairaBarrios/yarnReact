import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './styles/styles.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import CartContextProvider from "./context/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Checkout from "./components/Checkout";

function App() {
    return (
        <CartContextProvider>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <h1>Bienvenido a Yarn</h1>
                    </Route>
                    <Route exact path="/category/:category">
                        <ItemListContainer id="titulo"/>
                    </Route>
                    <Route exact path="/item/:itemId">
                        <ItemDetailContainer/>
                    </Route>
                    <Route exact path="/cart">
                        <Cart/>
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout/>
                    </Route>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </CartContextProvider>

    );
}

export default App;
