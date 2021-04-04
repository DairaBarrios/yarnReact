import React, {useEffect, useState} from 'react'
import ItemDetail from "./ItemDetail";
import * as utils from "../utils/constants";

function ItemDetailContainer( props ) {
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
        <div>
            {data && <ItemDetail id={data.id} title={data.title} pictureUrl={data.pictureUrl} price={data.price}></ItemDetail>}
        </div>
    )
}

export default ItemDetailContainer
