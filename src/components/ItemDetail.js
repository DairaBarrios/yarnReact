import React from 'react'

function ItemDetail(props) {
    return (

        <div>
            <h5>{props.description}</h5>
            <img src={props.photoUrl} alt=""/>
            <p>${props.price}</p>
        </div>

    )
}

export default ItemDetail