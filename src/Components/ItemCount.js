import React,{useState} from "react";

const ItemCount = ({initial, stock, onAdd}) => {
    const [contador,setContador] = useState(initial)

    const buttonClickSuma=()=>{
        contador < stock ? setContador(contador + 1) : (contador=stock)
        
    }
    const buttonClickResta=()=>{
        contador > 1 ? setContador(contador - 1) : (contador=1)
        
    }
    const AddCarrito = ()=>{
        stock > 0 ? onAdd(contador) :alert("Producto sin Stock") 
    }
    return <>
            <div className="itemCount">
            <button onClick={buttonClickResta}>-</button>
            <div>{contador}</div>
            <button onClick={buttonClickSuma}>+</button>
            </div>
            <div className="agregarCount">
            <button className="agregarCarrito" onClick={AddCarrito}>Agregar al Carrito</button>
            </div>
            
            
            </>
}
export default ItemCount