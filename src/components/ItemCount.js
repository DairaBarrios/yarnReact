import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';

function ItemCount(props) {
    const [count, setCount] = useState(props.initial);

    const handleIncrement = () => {
        if (count < props.stock) {
            setCount(prevCount => Number(prevCount) + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(prevCount => Number(prevCount) - 1);
        }
    };

    return (
        <div id="itemCount">
            <h3>Un articulo muy bonito del que hay {props.stock}</h3>
            <Grid container id="counter">
                <button onClick={handleDecrement}>-</button>
                <p>{count}</p>
                <button onClick={handleIncrement}>+</button>
            </Grid>
            <button>Agregar al Carrito</button>
        </div>

    )
}

export default ItemCount