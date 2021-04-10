import React, {useEffect, useState} from 'react'
import Item from "./Item";
import {Link, useParams} from "react-router-dom";
import * as  utils from "../utils/constants.js"
import {getFirestore} from "../firebase";

function ItemList() {
    const [data, setData] = useState();
    const {category} = useParams();

    useEffect(() => {
        async function fetchData() {
            const db = getFirestore()
            const itemCollection = db.collection("items")
            itemCollection.where("categoryId", "==", category).get().then((querySnapshot) => {
                setData(querySnapshot.docs.map(doc => { return {id: doc.id, ...doc.data()}}))
            })
        }

        fetchData()
    }, [category])

    return (
        <div id="itemList">
            {data && data.map( item => <Link to={{
                pathname: "/item/" + item.id
            }}><Item id={item.id} title={item.title} pictureUrl={item.pictureUrl} price={item.price}></Item></Link>)}
        </div>

    )
}

export default ItemList