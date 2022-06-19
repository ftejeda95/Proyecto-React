import React from "react";
import logo from "./assets/logoFerreteria.png";
import carrito from './assets/carrito.png'

const Header= ()=>{
    return(
        <>
            <nav style={style.container}>
                <div>
                    <img src={logo} alt="Logo Ferreteria" style={style.logo}/>
                </div>
                <div>
                    <h1 style={style.tittle}>Ferreteria Bustamante</h1>
                </div>
                    <ul style={style.lista}>
                        <a href="#" style={style.enlace}><li>Maquinas</li></a>
                        <a href="#" style={style.enlace}><li>Herramientas</li></a>
                        <a href="#" style={style.enlace}><li>Accesorios y Refacciones</li></a>
                    </ul>
                <div>
                    <img src={carrito} alt="carrito compras" width={30}/>
                </div>
            </nav>
        </>
    )
}
export default Header;

const style ={
    container:{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "rgb(180, 201, 143)"
    },
    lista:{
        fontFamily:"'Kanit', sans-serif",
        listStyle: "none",
        width:400,
        display: "viewport > 770px" ? "flex":"none",
        justifyContent:" space-between",
        padding: 0,
        textShadow: "2px 2px 2px rgb(233, 239, 185)",
        fontWeight: 800,
    },
    enlace:{
        textDecoration: "none",
        color: "gray",
    },
    logo:{
        borderRadius:50,
        width:75
    },
    tittle:{
        fontFamily:"'Kanit', sans-serif",
        fontZice:"2rem"
    }
}