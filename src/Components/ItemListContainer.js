import React, { useEffect,useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { PuffLoader  } from "react-spinners";

const initialProduct= [
    {   
    id: "1",
    title:"clavo",
    pictureUrl:"https://res.cloudinary.com/facuindex/image/upload/v1656883913/React/assets/clavo_rgrods.jpg",
    description:"esto es un clavo",
    price:"5"},
    {
    id: "2",
    title:"tornillo",
    pictureUrl:"https://res.cloudinary.com/facuindex/image/upload/v1656883914/React/assets/tornillo_lxr6qh.jpg",
    description:"esto es un tornillo",
    price:"5"},
    {   
    id: "3",
    title:"martillo",
    pictureUrl:"https://res.cloudinary.com/facuindex/image/upload/v1656883913/React/assets/martillo_yoa8bt.jpg",
    description:"esto es un martillo",
    price:"1500"},
    {   
    id: "4",
    title:"destornillador",
    pictureUrl:"https://res.cloudinary.com/facuindex/image/upload/v1656883913/React/assets/destornillador_dafz2t.jpg",
    description:"esto es un destornillador",
    price:"300"},
    {   
    id: "5",
    title:"pinza",
    pictureUrl:"https://res.cloudinary.com/facuindex/image/upload/v1656883916/React/assets/pinza_nj38jp.jpg",
    description:"esto es una pinza",
    price:"700"}]


const ItemListContainer = ({valor})=> {
    
    const [products,setProduct]=useState([]);
    const [loading,setLoading]=useState([true])
    
    useEffect(()=>{
        fetch("/json/Product.json")
            .then(res=> res.json())
            .then(data=>setTimeout(()=>{
                setProduct(data);},2000) )

            .finally(()=>setLoading(false))
    });

    const agregar =(count) => alert(`Se agregaron ${count} al Carrito`)
    
    return <> 
        <h2 className="slogan">
            {valor}
        </h2>
        {loading ? <div className="spinner"><PuffLoader  color="#82f682" speedMultiplier={2}  /></div>: <ItemList products={products}/>}
        <ItemCount initial={1} stock={5} onAdd={agregar}/>

        
    </>
}
export {ItemListContainer , initialProduct}