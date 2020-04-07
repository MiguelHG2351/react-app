import React, { Component } from "react";
import { Link } from "react-router-dom";

import image from "./images/persona.png";

class ImgHeader extends Component {
  render() {
    return (
      <div className="align-portada">
        <div className="intro-image">
          <nav className="position-site">
            <Link to="/">Inicio</Link>
            <span>Usted esta en el Inicio de la App</span>
          </nav>
          <img src={image} className="img-responsive" alt="Persona estudiando" />
        </div>
        <div style={{ margin: "0 auto" }} className="intro-title text-center">
          <h1>Bienvenidos a MathForAll.</h1>
          <p style={{ textAlign: "left" }}>
            MathForAll es un centro de entrenamiento matematico que tiene
            <br /> como fin ayudar a estudiantes que tiene problemas en
            Matemáticas <br /> o quieren aprender más de la ciencia madre,
            nuestros cursos van
            <br /> desdes temas de álgebra hasta cálculo LV con maestros
            altamente
            <br /> capacitados que te daran las herramientas para triunfar en la{" "}
            <br />
            vida.
          </p>
          <h2>Nuestros cursos son:</h2>
          <ul className="list-course-index">
            <li>
              <a href="first.html">
                Matemáticas 1<sup>er</sup> año
              </a>
            </li>
            <li>
              <a href="two.html">
                Matemáticas 2<sup>do</sup> año
              </a>
            </li>
            <li>
              <a href="three.html">
                Matemáticas 3<sup>er</sup> año
              </a>
            </li>
            <li>
              <a href="for.html">
                Matemáticas 4<sup>to</sup> año
              </a>
            </li>
            <li>
              <a href="five.html">
                Matemáticas 5<sup>to</sup> año
              </a>
            </li>
            <li>
              <a href="pre-u.html">Preparación pre-universitaria</a>
            </li>
            <li>
              <a href="uni.html">Cálculo</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ImgHeader;
