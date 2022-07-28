import React, { useContext } from "react";
import { cartContext } from "./CartContext";
import { Link } from "react-router-dom";


const Cart = () =>{
    const {products,RemoveItem,Clear,QuantityProducts,Price} = useContext(cartContext)


     return(
      QuantityProducts === 0 ? <h3 className="tittle">¡El carrito esta vacío! <Link to="/" className="toHome"> Haga click aquí </Link> para agregar Productos.</h3>
      :
      <div>
        <div  className="itemCartDetail">
            {products.map((product) =>
                <div key={product.id}>
                    <div className="card">   
                    <h5 className="tittleCard">{product.title}</h5>
                    <img src={product.pictureUrl} width="200px" height="200px"/>
                    <Link to={`/item/${product.id}`}><button className="buttonCard">Ver Producto</button></Link>
                    <p className="textCardCart">Precio: ${product.price}</p>
                    <p className="textCardCart">Cantidad en Carrito: {product.qty}</p>
                    <button onClick={()=>RemoveItem(product.id)}  className="buttonCardCart">Eliminar Item</button> 
                </div>
        </div>)}
        </div>
        <div className="cartCompra">
            <button onClick={Clear}  className="buttonCardCart">Limpiar Items</button>
            <h3 className="price">Precio Total de la Compra: ${Price}</h3>
            <Link to={"/form"}><button className="buttonCardCart">Finalizar Compra</button></Link>
        </div>
        </div>
     )
}
export default Cart