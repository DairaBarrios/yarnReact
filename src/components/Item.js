import React from 'react'

function Item(props) {
    return (
        <div id={props.id}>
            <h5>{props.title}</h5>
            <img src={props.pictureUrl} alt=""/>
            <p>Precio: ${props.price}</p>
        </div>

    )
}

export default Item