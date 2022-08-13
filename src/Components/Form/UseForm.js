
import { useState } from "react";

export const UseForm=()=>{
    const initialForm = {
        name:"",
        surname:"",
        dni:"",
        phone:"",
        mail:"",
    };
    const [form,setForm]=useState(initialForm);

    const [buyer,setBuyer]=useState(initialForm);

    const [errors,setErrors]=useState({});

    const handleChange = (event) => {
        const {name,value}= event.target;
        setForm({...form,[name]:value,});
        setBuyer(values => ({...values, [name]: value}));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const validationsForm = (form) => {
        let errors = {};
        let RegexEmail= /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let RegexName= /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let RegexPhone= /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
        let RegexDni= /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/;
    
      if (!form.name) {
        errors.name = "El campo Nombre es Requerido";
      }else if(!RegexName.test(form.name)){
        errors.name="El Campo Nombre solo acepta Letras y espacios en Blanco";
      }
      if (!form.surname) {
        errors.surname = "El campo Apellido es Requerido";
      }else if(!RegexName.test(form.surname)){
        errors.surname="El Campo Nombre solo acepta Letras y espacios en Blanco";
      }
      if (!form.dni) {
        errors.dni = "El campo DNI es Requerido";
      }else if(!RegexDni.test(form.dni)){
        errors.dni="El Campo Nombre numeros y puntos";
      }
      if (!form.phone) {
        errors.phone = "El campo Celular es Requerido";
      }else if(!RegexPhone.test(form.phone)){
        errors.phone="El Campo Nombre solo numeros y guiones";
      }
      if (!form.mail) {
        errors.mail = "El campo Mail es Requerido";
      }else if(!RegexEmail.test(form.mail)){
        errors.mail="El Campo email es incorrecto";
      }
      return errors;
    };
    const handleBlur = (event) => {
        event.preventDefault();
        handleChange(event)
        setErrors(validationsForm(form))
    };
    return({form,errors,handleChange,handleBlur,handleSubmit,buyer});
};