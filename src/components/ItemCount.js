import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';

function ItemCount(props) {
    return (
        <div id="itemCount">
            <h3>Un articulo muy bonito del que hay {props.stock}</h3>
            <Grid container id="counter">
                <button onClick={props.onSubtract}>-</button>
                <p>{props.count}</p>
                <button onClick={props.onAdd}>+</button>
            </Grid>
            <button onClick={props.onPurchase}>Agregar al Carrito</button>
        </div>

    )
}

export default ItemCount