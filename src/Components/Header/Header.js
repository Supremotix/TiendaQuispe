import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Header.css"

const Header = () => {
  return (
    <>
      <img src="" alt="logo" />
      <h1>Titulo</h1>
      <nav>
        <a href="">Categoria 1</a>
        <a href="">Categoria 2</a>
        <a href="">Categoria 3</a>
        <a href="">Categoria 4</a>
      </nav>
      <ShoppingCartIcon color="success" fontSize="large"/>

      </>
  );
};

export default Header;
