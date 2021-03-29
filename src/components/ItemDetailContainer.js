import React, {useEffect, useState} from 'react'
import ItemDetail from "./ItemDetail";

function ItemDetailContainer( props ) {
    const [data, setData] = useState();

    const getItems = () => {
        return new Promise((resolve) => setTimeout(() => resolve(mockItemDetail()), 2000))
    }

    const mockItemDetail = () => {
        return [{
            description: "un muy bonito husky",
            photoUrl: "https://www.hola.com/imagenes/estar-bien/20201005176621/perro-husky-raza-perro-lobo/0-874-229/husky-t.jpg",
            price: "no lo puede tener"
        }]
    }

    useEffect(() => {
        async function fetchData() {
            let response = await getItems()
            setData(response)
        }

        fetchData()
    })

    return (
        <div>
            {data && data.map( item => <ItemDetail description={item.description} photoUrl={item.photoUrl} price={item.price}></ItemDetail>)}
        </div>
    )
}

export default ItemDetailContainer
