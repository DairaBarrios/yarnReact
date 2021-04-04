import React, {useEffect, useState} from 'react'
import Item from "./Item";
import {Link} from "react-router-dom";
import * as  utils from "../utils/constants.js"

function ItemList() {
    const [data, setData] = useState();

    useEffect(() => {
        async function fetchData() {
            let response = await mockItems()
            setData(response)
        }

        fetchData()
    })

    const mockItems = () => {
        return new Promise((resolve) => setTimeout(() => resolve(utils.mockedItemList), 2))
    }

    return (
        <div id="itemList">
            {data && data.map( item => <Link to={{
                pathname: "/item/" + item.id
            }}><Item id={item.id} title={item.title} pictureUrl={item.pictureUrl} price={item.price}></Item></Link>)}
        </div>

    )
}

export default ItemList