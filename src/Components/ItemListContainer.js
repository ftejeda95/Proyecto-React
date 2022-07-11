import React, { useEffect,useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { ScaleLoader  } from "react-spinners";
import { useParams } from "react-router";



const ItemListContainer = ({greeting})=> {
    
    const [products,setProduct]=useState([]);
    const [loading,setLoading]=useState([true])

    const {categoryId} = useParams()
  
    useEffect(()=>{

        const URL = categoryId ? `/json/categories/${categoryId}.json` : "/json/Product.json"

        fetch(URL)
            .then(res=> res.json())
            .then(data=>setProduct(data))

            .finally(()=>setLoading(false))

    },[categoryId]);

    const agregar =(count) => alert(`Se agregaron ${count} al Carrito`)
    
    return <> 
        <h2 className="slogan">
            {greeting}
        </h2>
        

        {loading ? <div className="spinner"><ScaleLoader  color="#82f682" /></div>: <ItemList products={products}/>}
        
        <ItemCount initial={1} stock={5} onAdd={agregar}/>

        
    </>
}
export default ItemListContainer