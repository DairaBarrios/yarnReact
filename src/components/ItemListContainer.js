import React from 'react'
import ItemCount from './ItemCount'
import ItemList from "./ItemList";

function ItemListContainer( props ) {
    return (
        <div>
            <h1 id={props.id}>{props.greeting}</h1>
            <ItemList></ItemList>
        </div>
    )
}

export default ItemListContainer
