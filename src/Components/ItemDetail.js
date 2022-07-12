
import React, {useState} from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({products}) =>{

    const [finalized,setFinalized]= useState(true)

    const agregar =(count) => {
        setFinalized(false)
        alert(`Se agregaron ${count} al Carrito`)}

    return(products.map(product=> (
    <div className="divDetail" key={product.id}>
        <h3 className="titleDetail">{product.title}</h3>
        <img src={product.pictureUrl} className="imgDetail"/>
        <p className="textDetail">CARACTERISTICA:{product.description}</p>
        <p className="priceDetail">PRECIO POR UNIDAD: ${product.price}</p>
        {finalized ? <ItemCount initial={1} stock={5} onAdd={agregar} className="countDetail"/> : <div className="itemCount"><Link to="/cart"><button className="agregarCarrito">Finalizar Compra</button></Link> <Link to="/"><button className="agregarCarrito">Seguir Comprando</button></Link></div>}
    </div>)))
}   

export default ItemDetail