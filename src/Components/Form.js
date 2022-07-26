import React from "react";

const Form = () =>{
    
return(
    <form>
        <label >Nombre
        <input name="name" type="text"></input></label>
        <label >Apellido
        <input name="surname" type="text"></input></label>
        <label>DNI
        <input name="dni" type="number"></input></label>
        <label>Tarjeta numero
        <input name="tarjeta" type="number"></input></label>
        <button type="submit">Finalizar</button>
    </form>
    )
}

export default Form