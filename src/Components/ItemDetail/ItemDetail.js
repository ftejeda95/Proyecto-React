
import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { cartContext } from "../CartContext/CartContext";

const ItemDetail = ({products}) =>{
    const [finalized,setFinalized]= useState(true);
    
    const {AddItem} = useContext(cartContext);

    const onAdd =(quantityToAdd) => {
        AddItem({...products, qty:quantityToAdd},quantityToAdd);
        setFinalized(false);
    };

    return(
        <div className="divDetail" key={products.id}>
            <h3 className="titleDetail">{products.title}</h3>
            <img src={products.pictureUrl} className="imgDetail"/>
            <h4 className="titleDescription">CARACTERISTICA:</h4> 
            <p className="textDetail">{products.descriptionLg}</p>
            <h4 className="priceDetail">PRECIO POR UNIDAD:<span className="toHome">  ${products.price}</span></h4> 
            <h4 className="stockDetail">STOCK DISPONIBLE:<span className="toHome">  {products.stock} UNIDADES</span></h4> 
            {finalized ?
                <ItemCount initial={1} stock={products.stock} onAdd={onAdd} className="countDetail"/> :
                <div className="buttonCompra"><Link to="/cart"><button className="agregarCarrito">Finalizar Compra</button></Link> 
                <Link to="/"><button className="agregarCarrito">Seguir Comprando</button></Link></div>}
        </div>);
};   

export default ItemDetail;