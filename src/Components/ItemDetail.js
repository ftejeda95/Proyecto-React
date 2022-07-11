
import React from "react";

const ItemDetail = ({products}) =>{
    return(products.map(product=> (
    <div className="divDetail" key={product.id}>
        <h3 className="titleDetail">{product.title}</h3>
        <img src={product.pictureUrl} className="imgDetail"/>
        <p className="textDetail">CARACTERISTICA:{product.description}</p>
        <p className="priceDetail">PRECIO POR UNIDAD: ${product.price}</p>
        <button className="buttonDetail">FINALIZAR COMPRA</button>
    </div>)))
}   

export default ItemDetail