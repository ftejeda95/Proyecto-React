import React, { useEffect,useState } from "react";
import Item from "./Item";

const ItemList = ({products})=>{      
    return (<div  className="ItemCard"> {products.map(product=> (<Item key={product.id} product={product} className="ItemCard"/>))}</div>)
    
}

export default ItemList