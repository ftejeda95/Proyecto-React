import { useContext, useState } from "react";
import { cartContext } from "../CartContext/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";
import { UseForm } from "./UseForm";
import { ScaleLoader } from "react-spinners";

const Form = () => {
  const { products, Price, Clear } = useContext(cartContext);
  const { errors, handleChange, handleBlur,  handleSubmit,  buyer , form}= UseForm()
  const [idVenta, setIdVenta] = useState("");
  const [loading,setLoading] = useState([true])

  const finalizarCompra = () => {
    const ventasCollection = collection(db, "ventas");
    addDoc(ventasCollection, {
      buyer,
      items: products,
      date: serverTimestamp(),
      total: Price,
    }).then((result) => {
      return (setIdVenta(result.id), Clear());
    }).finally(setLoading(false));
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label className="formText">Nombre</label>
        <input
          onChange={handleChange}
          className="form"
          name="name"
          placeholder="Primer y Segundo nombre"
          onBlur={handleBlur}
          type="text"
          value={form.name}
          required
        ></input>
        {errors.name && <p className="errors">{errors.name}</p>}
        <br/>

        <label className="formText">Apellido</label>
        <input
          onChange={handleChange}
          className="form"
          name="surname"
          placeholder="Apellido completo"
          onBlur={handleBlur}
          type="text"
          value={form.surname}
          required
        ></input>
        {errors.surname && <p className="errors">{errors.surname}</p>}
        <br/>

        <label className="formText">DNI</label>
        <input
          onChange={handleChange}
          className="form"
          name="dni"
          placeholder="Numero de documento sin puntos"
          onBlur={handleBlur}
          type="number"
          value={form.dni}
          required
        ></input>
        {errors.dni && <p className="errors">{errors.dni}</p>}
        <br/>

        <label className="formText">Celular</label>
        <input
          onChange={handleChange}
          className="form"
          name="phone"
          placeholder="numero de telefono sin 0 y 15"
          onBlur={handleBlur}
          type="number"
          value={form.phone}
          required
        ></input>
        {errors.phone && <p className="errors">{errors.phone}</p>}
        <br/>

        <label className="formText">Correo Electronico</label>
        <input
          onChange={handleChange}
          className="form"
          name="mail"
          placeholder="ejemplo bustamante@ferreteria.com.ar"
          onBlur={handleBlur}
          type="email"
          value={form.mail}
          required
        ></input>
        {errors.mail && <p className="errors">{errors.mail}</p>}
        <br/>
        <br/>
        <div className="buttonForm">
          <button type="form-submit" className="agregarCarrito" onClick={finalizarCompra}>Finalizar</button>
          <button type="reset" className="agregarCarrito">Borrar</button>
        </div>
      </form>
      <div className="divResp">
        {idVenta ? (
          <h3 className="tittle">
            Su predido se ha realizado con Exito, su solicitud fue guardad bajo
            el ID: <span className="id">{idVenta}</span>
          </h3>
        ) : loading ?(<h3>Para confirmar su pedido presione Finalizar</h3> ):
            <div className="formSpinner"><ScaleLoader  color="#82f682" speedMultiplier={2} /></div>
        }
      </div>
    </div>
  );
};

export default Form;
