import React, { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { PuffLoader } from "react-spinners";
import {useParams} from "react-router-dom"


const ItemDetailContainer = ({id})=> {
    const [products,setProduct]=useState([])
    const [loaded,setLoad]=useState([true])

    
    useEffect(()=>{
        fetch(`/json/${id}.json`)
            .then(res=> res.json())
            .then(data=>setTimeout(()=>{
                setProduct(data);},2000) )

            .finally(()=>setLoad(false))
    },[id]);

    return (<>{loaded ? <div className="spinner"><PuffLoader  color="#82f682" speedMultiplier={2}  /></div>:<ItemDetail products={products}/>}</>)
}
export default ItemDetailContainer