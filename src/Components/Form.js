import React from "react";
import { useContext, useState } from "react";
import { cartContext } from "./CartContext";
import { addDoc,collection,serverTimestamp } from "firebase/firestore"
import { db } from "../Firebase/Firebase";


const Form = () =>{
    const {products,Price,Clear} = useContext(cartContext)
    const [buyer, setBuyer] = useState({});
    const [idVenta,setIdVenta]=useState("")

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setBuyer(values => ({...values, [name]: value}))
      }
    const handleSubmit = (event) => {
        event.preventDefault();
      }

    const finalizarCompra=()=>{
        const ventasCollection = collection(db,"ventas");
        addDoc(ventasCollection, {
            buyer,
            items: products,
            date:serverTimestamp(),
            total:Price,
        }).then((result)=>{
            return(
                setIdVenta(result.id),
                Clear()
            )})
    }

return(<>
    <form onSubmit={handleSubmit}>
        <label className="textDetail" >Nombre</label><br />
        <input onChange={handleChange} className="form" name="name" type="text" value={buyer.name}  required></input>  
        <label className="textDetail">Apellido</label><br />
        <input onChange={handleChange} className="form" name="surname" type="text" value={buyer.surname} required></input>
        <label className="textDetail">DNI</label><br />
        <input onChange={handleChange} className="form" name="dni" type="number" value={buyer.dni}  required></input>
        <label className="textDetail">Celular</label><br />
        <input onChange={handleChange} className="form" name="phone" type="number" value={buyer.phone}  required></input>
        <label className="textDetail">Correo Electronico</label><br />
        <input onChange={handleChange} className="form" name="mail" type="text" value={buyer.mail} required ></input> <br />
        <button type="form-submit" className="agregarCarrito" onClick={finalizarCompra}>Finalizar</button>
    </form>
        <div>
            {idVenta ? <h3 className="tittle">Su predido se ha realizado con Exito, su solicitud fue guardad bajo el <span className="id">{idVenta}</span></h3> : <h3>Para confirmar su pedido presione Finalizar</h3>}
        </div>
    </>
    )
}

export default Form