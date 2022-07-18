import React from 'react';
import './style/App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
import Cart from './Components/Cart';
import CartContex from './Components/CartContext'

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
      </Routes>
    </CartContex>
    </BrowserRouter>   );



}

export default App;
