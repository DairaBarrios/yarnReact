import React, {useEffect, useState} from 'react'
import Item from "./Item";

function ItemList(props) {
    const [data, setData] = useState(props.initial);

    useEffect(() => {
        async function fetchData() {
            let response = await mockItems()
            setData(response)
        }

        fetchData()
    })


    return (

        <div id="itemList">
            {data && data.map( item => <Item id={item.id} title={item.title} pictureUrl={item.pictureUrl} price={item.price}></Item>)}
        </div>

    )
}

function mockItems() {
    return new Promise((resolve) => setTimeout(() => resolve(createMockedList()), 2000))
}

function createMockedItem([id, title, url, price]) {
    return {
        id: id,
        title: title,
        url: url,
        price: price
    }
}

function createMockedList() {
    const list = [[1, "titulo", "url", "40"], [2, "titulo2", "url2", "402"], [3, "titulo3", "url3", "403"], [5, "titulo5", "url5", "405"]]
    let result = []
    for (let item of list) {
        result.push(createMockedItem(item))
    }
    return result
}

export default ItemList