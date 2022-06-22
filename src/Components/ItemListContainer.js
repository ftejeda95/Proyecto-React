import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({valor})=> {
    const agregar =(count) => alert(`Se agregaron ${count} al Carrito`)
    return <> 
        <h2 className="slogan">
            {valor}
        </h2>
        <ItemCount initial={1} stock={5} onAdd={agregar}/>
    </>
}
export default ItemListContainer