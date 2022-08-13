import React, { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { ScaleLoader } from "react-spinners";
import {useParams} from "react-router-dom"
import { db } from "../../Firebase/Firebase";
import { getDoc, collection, doc } from "firebase/firestore";


const ItemDetailContainer = ()=> {

    const [products,setProduct]=useState([]);

    const [loaded,setLoad]=useState([true]);

    const {itemId} = useParams();

    useEffect(()=>{
        const productCollection = collection(db,"Products");
        const refDoc = doc(productCollection,itemId);
        getDoc(refDoc)
            .then(result=>{
                const producto = {
                    id:result.id,
                    ...result.data()
                };
            setProduct(producto);
            })
            .finally(()=>setLoad(false));
            
    },[itemId]);
    return (<>
                {loaded ? 
                <div className="spinner"><ScaleLoader  color="#82f682" speedMultiplier={2} /></div>:
                <ItemDetail products={products}/>}
                </>);
};
export default ItemDetailContainer;