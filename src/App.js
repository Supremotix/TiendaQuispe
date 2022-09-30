import React from // createContext // useState,
"react";

//import logo from './logo.svg';
import "./App.css";
//import Counter from './components/Counter/Counter.js';
import NavBar from "./Components/NavBar/NavBar";

import ItemListContainer from "./Components/ItemListContainer/ItemListContaines";

//import MercadoLibre from './components/MercadoLibre/MercadoLibre';

import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Components/Context/CartContext";

function App() {
  // const [page, setPage] = useState('list')
  return (
    <div className="App">
      <CartProvider>
        {/*
       <MercadoLibre />
        <Navbar />
 
       <div>
         <button onClick={() => setPage('list')} className='a'>List</button>
         <button onClick={() => setPage('detail')} className='a'>Detail</button>
       </div>
 
       {page === 'list' && <ItemListContainer greeting='Bienvenidos' />}
 
       {page === 'detail' && <ItemListContainer greeting='Bienvenidos' />}*/}
        {/* <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
         <p>
           Edit <code>src/App.js</code> and save to reload.
         </p>
         <h1 style={{color: 'red' }}>Comision </h1>
         <p style={{backgroundColor: 'green'}}>
           Hola Coders
         </p>
 
         <button onClick={() => console.log('nice click') }> Mostrasr un mensaje en consola</button>
 
       </header>*/}
        {/* <Counter initial={10} stock={15} title='Contador'  />*/}
        {/*{React.createElement(Counter,{initial:25, title: 'Contenedor 2'})}*/}
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Hola Coders" />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="/detail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<h1> Cart </h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
