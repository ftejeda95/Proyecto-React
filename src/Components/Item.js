import React from "react";
import ItemDetailContainer from "./ItemDetailContainer";

const Item = ({product})=>{
    return( <div className="card">   
                <h5 className="tittleCard">{product.title}</h5>
                <img src={product.pictureUrl} width="200px" height="200px"/>
                <p className="textCard">{product.description}</p>
                <button className="buttonCard" >Ver Producto</button>
                <p className="textCard">Precio: ${product.price}</p>
            </div>)

     
}
export default Item