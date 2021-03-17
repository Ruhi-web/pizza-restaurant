import React from "react";
import './css/App.css';
import Header from './Components/Header';
import Aboutus from './Components/Aboutus';
import Shop from './Components/Shop';
import Menu from './Components/Menu';
import Clients from './Components/Clients';
import Prices from './Components/Prices';

function App() {
  return (
    <div>
     <Header />
     <Aboutus />
     <Shop />
     <Menu /> 
     <Clients />
     <Prices />
    </div>
  );
}

export default App;
