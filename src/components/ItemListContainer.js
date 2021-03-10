import React from 'react'

function ItemListContainer( props ) {
    return (
        <div>
            <h1 id={props.id}>{props.greeting}</h1>
        </div>
    )
}

export default ItemListContainer
