import React from 'react'
import ItemCount from './ItemCount'
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
import {capitalize} from "@material-ui/core";

function ItemListContainer( props ) {
    const {category} = useParams();
    return (
        <div>
            <h1 id={props.id}>{capitalize(category)}</h1>
            <ItemList></ItemList>
        </div>
    )
}

export default ItemListContainer
