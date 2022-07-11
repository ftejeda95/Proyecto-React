import React, { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { ScaleLoader } from "react-spinners";
import {useParams} from "react-router-dom"


const ItemDetailContainer = ()=> {
    const [products,setProduct]=useState([])
    const [loaded,setLoad]=useState([true])

    const {itemId} = useParams()

    useEffect(()=>{

        fetch(`/json/items/${itemId}.json`)
            .then(res=> res.json())
            .then(data=>setProduct(data)) 

            .finally(()=>setLoad(false))
    },[itemId]);

    return (<>{loaded ? <div className="spinner"><ScaleLoader  color="#82f682" speedMultiplier={2} /></div>:<ItemDetail products={products}/>}</>)
}
export default ItemDetailContainer