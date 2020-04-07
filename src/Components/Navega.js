import React, { Component } from "react";
import { Link } from "react-router-dom";
// import image from './images/back.jpg'

//Importar clases
import logo from "./images/logo192.png";

class Navega extends Component {
  render() {
    return (
      <nav className="header-nav">
        <div style={{ cursor: "pointer" }}>
          <img src={logo} alt="logo oficial del sitio" />
          <span style={{ color: "#fff" }}>MathForAll</span>
        </div>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/cursos">Cursos</Link>
          </li>
          <li className="divider">
            <a href="tel:85153533">Contactanos</a>
          </li>
          <li>
            <Link to="/class">Clases</Link>
          </li>
          <li>
            <Link to="/user">USER</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navega;
