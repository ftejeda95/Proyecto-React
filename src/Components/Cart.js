import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () =>{
    const {products,RemoveItem,Clear,QuantityProducts} = useContext(cartContext)



     return(<div  className="itemCartDetail">
        
    {QuantityProducts === 0 ? <h3>No hay producto en el Carrito</h3>:products.map((product) =>
     <div key={product.id}>
         <div className="card">   
                 <h5 className="tittleCard">{product.title}</h5>
                 <img src={product.pictureUrl} width="200px" height="200px"/>
                 <Link to={`/item/${product.id}`}><button className="buttonCard">Ver Producto</button></Link>
                 <p className="textCardCart">Precio: ${product.price}</p>
                 <p className="textCardCart">Cantidad en Carrito: {product.qty}</p>
                 <button onClick={()=>RemoveItem(product.id)}  className="buttonCardCart">Eliminar Item</button> <button onClick={Clear}  className="buttonCardCart">Limpiar Items</button>
             </div>
     </div>)}
     
     </div>)
}
export default Cart