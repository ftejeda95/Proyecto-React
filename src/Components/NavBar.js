import React from "react";
import logo from "../assets/logoFerreteria.png";
import CardWidget from './CardWidget'
import '../style/App.css'
const NavBar= ()=>{
    return(
        <>
            <nav className="container">
                <div>
                    <img src={logo} alt="Logo Ferreteria" className="logo"/>
                </div>
                <div>
                    <h1 className="tittle">Ferreteria Bustamante</h1>
                </div>
                    <ul className="lista">
                        <a href="#" className="enlace"><li>Maquinas</li></a>
                        <a href="#" className="enlace"><li>Herramientas</li></a>
                        <a href="#" className="enlace"><li>Accesorios y Refacciones</li></a>
                    </ul>
                <div>
                    <CardWidget/>
                </div>
                
            </nav>
        </>
    )
}
export default NavBar;

// const style ={
//     container:{
//         display: "flex",
//         justifyContent: "space-around",
//         alignItems: "center",
//         backgroundColor: "rgb(180, 201, 143)"
//     },
//     lista:{
//         fontFamily:"'Kanit', sans-serif",
//         listStyle: "none",
//         width:400,
//         display: "viewport > 770px" ? "flex":"none",
//         justifyContent:" space-between",
//         padding: 0,
//         textShadow: "2px 2px 2px rgb(233, 239, 185)",
//         fontWeight: 800,
//     },
//     enlace:{
//         textDecoration: "none",
//         color: "gray",
//     },
//     logo:{
//         borderRadius:50,
//         width:75
//     },
//     tittle:{
//         fontFamily:"'Kanit', sans-serif",
//         fontZice:"2rem"
//     }
// }
