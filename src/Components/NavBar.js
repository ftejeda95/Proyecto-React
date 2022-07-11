import React from "react";
import logo from "../assets/logoFerreteria.png";
import CardWidget from './CardWidget'
import '../style/App.css'
import { Link,NavLink } from "react-router-dom";

const categories = [
    {nameRoute:"maquinas",categoryID:1,route:"/category/maquinas"},
    {nameRoute:"herramientas",categoryID:2,route:"/category/herramientas"},
    {nameRoute:"electricidad",categoryID:3,route:"/category/electricidad"}
]
const NavBar= ()=>{
    return(
        <>
            <nav className="container">
                <div>
                    <Link to="/"><img src={logo} alt="Logo Ferreteria" className="logo"/></Link>
                </div>
                <div>
                    <h1 className="tittle">Ferreteria Bustamante</h1>
                </div>
                    <ul className="lista">
                        {categories.map((category)=><NavLink to={category.route} className="enlace" key={category.categoryID}><li className="listaItem">{category.nameRoute}</li></NavLink>)}
                    </ul>
                <div>
                    <Link to="/cart"><CardWidget/></Link>
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
