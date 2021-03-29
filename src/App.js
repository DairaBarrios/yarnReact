import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './styles/styles.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";
import ItemList from "./components/ItemList";
import Item from "./components/Item";
import ItemDetail from "./components/ItemDetail";
import Cart from "./components/Cart";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <ItemListContainer id="titulo" greeting="hola"/>
                </Route>
                <Route exact path="/category/:id">
                    <ItemList/>
                </Route>
                <Route exact path="/item/:itemId">
                    <Item/>
                    <ItemDetail requestedItems="4"/>
                </Route>
                <Route exact path="/cart">
                    <Cart/>
                </Route>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
