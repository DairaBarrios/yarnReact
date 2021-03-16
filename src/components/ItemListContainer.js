import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer( props ) {
    return (
        <div>
            <h1 id={props.id}>{props.greeting}</h1>
            <ItemCount stock="5" initial="1"></ItemCount>
        </div>
    )
}

export default ItemListContainer
