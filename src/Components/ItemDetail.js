
import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { cartContext } from "./CartContext";

const ItemDetail = ({products}) =>{
    const [finalized,setFinalized]= useState(true)
    const {AddItem} = useContext(cartContext)

    const onAdd =(quantityToAdd) => {
        AddItem({...products, qty:quantityToAdd})
        setFinalized(false)
    }

    return(
    <div className="divDetail" key={products.id}>
        <h3 className="titleDetail">{products.title}</h3>
        <img src={products.pictureUrl} className="imgDetail"/>
        <p className="textDetail">CARACTERISTICA:{products.description}</p>
        <p className="priceDetail">PRECIO POR UNIDAD: ${products.price}</p>
        {finalized ?
            <ItemCount initial={1} stock={5} onAdd={onAdd} className="countDetail"/> :
            <div className="buttonCompra"><Link to="/cart"><button className="agregarCarrito">Finalizar Compra</button></Link> 
            <Link to="/"><button className="agregarCarrito">Seguir Comprando</button></Link></div>}
    </div>)
}   

export default ItemDetail