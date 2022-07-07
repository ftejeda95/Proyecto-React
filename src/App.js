import React from 'react';
import './style/App.css';
import NavBar from './Components/NavBar';
import {ItemListContainer} from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
function App() {

  return (
    <>
    <NavBar />
    <ItemListContainer valor='Construyendo Juntos'/>
    <ItemDetailContainer id={[1]}/>
    </> 
  );
}

export default App;
