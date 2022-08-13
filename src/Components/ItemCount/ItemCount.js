import React,{useState} from "react";
import Swal from "sweetalert2";

const ItemCount = ({initial, stock, onAdd}) => {

    const [contador,setContador] = useState(initial);

    const buttonClickSuma=()=>{
        contador < stock ? setContador(contador + 1) : Swal.fire({
            icon: 'error',
            title: 'Superas la cantidad maxima en stock',
            text: 'Producto sin Stock',
          });
    };

    const buttonClickResta=()=>{
        contador > 1 ? setContador(contador - 1) : setContador(initial);
    };

    const AddCarrito = ()=>{
        stock > 0 ? onAdd(contador): Swal.fire({
            icon: 'error',
            title: 'Superas la cantidad maxima en stock',
            text: 'Producto sin Stock',
          });
    };

    
        return  <div className="itemCount">
                    <div className="itemButton">
                        <button onClick={buttonClickResta}>-</button>
                        <p>{contador}</p>
                        <button onClick={buttonClickSuma}>+</button>
                    </div>
                    <div className="agregarCount">
                        <button className="agregarCarrito" onClick={AddCarrito}>Agregar al Carrito</button>
                    </div>  
                </div>
};
export default ItemCount;