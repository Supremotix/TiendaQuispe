import CartWidget from "../CartWidget/CarWidget";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="header_nav">
      <div className="nav">
        <Link to={`/`}>
          <h3>Importaciones</h3>
        </Link>
        <CartWidget />
      </div>
      <ul className="header_nav_lista">
        <Link to="/category/tarjeta" className="btn2 btn-warning">
          Tarjeta de video
        </Link>
        <Link to="/category/audifonos" className="btn2 btn-warning">
          Audifonos Gamer
        </Link>
        <Link to="/category/Placamadre" className="btn2 btn-warning">
          Placa madre
        </Link>
        <Link to="/category/teclado" className="btn2 btn-warning">
          Teclado
        </Link>
        <Link to="/category/Silla" className="btn2 btn-warning">
          Silla gamer
        </Link>
        <Link to="/category/mouse" className="btn2 btn-warning">
          Mouse
        </Link>
      </ul>
    </nav>
  );
};
export default NavBar;
