import React, { useContext } from "react";
import logo from "../../assets/logoFerreteria.png";
import CardWidget from './CardWidget'
import '../../style/App.css'
import { Link,NavLink } from "react-router-dom";
import { cartContext } from "../CartContext/CartContext";

const categories = [
    {nameRoute:"maquinas",categoryID:1,route:"/category/maquinas"},
    {nameRoute:"herramientas",categoryID:2,route:"/category/herramientas"},
    {nameRoute:"electricidad",categoryID:3,route:"/category/electricidad"}
];


const NavBar= ()=>{
    const {QuantityProducts} = useContext(cartContext);
    
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
                <div className="divCart">
                    <Link to="/cart"><CardWidget/></Link>
                    {QuantityProducts === 0 ? <></> :<p className="countCart">{QuantityProducts}</p>}
                </div>
                
            </nav>
            
        </>
    );
};
export default NavBar;
