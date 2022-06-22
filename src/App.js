import React from 'react';
import './style/App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';

function App() {

  return (
    <>
    <NavBar />
    <ItemListContainer valor='Construyendo Juntos'/>
    </> 
  );
}

export default App;
