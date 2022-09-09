import React from "react";

import "./Header.css";
import CartWidget from "../CartWidget/CartWidget";
const Header = () => {
  return (
    <>
      <img src="" alt="logo" />
      <h1>Titulo</h1>
      <CartWidget />
      <nav>
        <a href="">Categoria 1</a>
        <a href="">Categoria 2</a>
        <a href="">Categoria 3</a>
        <a href="">Categoria 4</a>
      </nav>
    </>
  );
};

export default Header;
