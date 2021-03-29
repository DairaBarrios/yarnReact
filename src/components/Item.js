import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import * as utils from "../utils/constants"


function Item(props) {
    const {itemId} = useParams();
    const [data, setData] = useState();


    useEffect(() => {
        if (props) {
            let item = findItem(itemId, getItems())
            setData(item)
        }
    })

    const getItems = () => {
        return utils.mockedItemList
    }

    const findItem = (itemId, items) => {
        let foundItem = null;
        for (let key in items) {
            if (items[key].id == itemId) {
                foundItem = items[key];
                break;
            }
        }
        return foundItem
    }

    return (
        <div class="item" id={data ? data.id : props.id}>
            <h5>{data ? data.title : props.title}</h5>
            <img src={data ? data.pictureUrl : props.pictureUrl} alt=""/>
            <p>Precio: ${data ? data.price : props.price}</p>
        </div>

    )
}

export default Item