import React from 'react';
import './style/App.css';
import NavBar from './Components/Header/NavBar';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetail/ItemDetailContainer';
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
import Cart from './Components/Cart/Cart';
import CartContex from './Components/CartContext/CartContext'
import Form from './Components/Form/Form';
import Footer from './Components/Footer/Footer';

function App() {

  return (

    <BrowserRouter>
    <CartContex>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Construyendo Juntos'/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Construyendo Juntos'/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
      <Footer/>
    </CartContex>
    </BrowserRouter>   );



}

export default App;
