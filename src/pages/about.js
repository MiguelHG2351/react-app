import React, { Component } from "react";
import { Link } from "react-router-dom";
import Imgtitle from "../Components/imgtitle";
import josue from "../Components/images/josueConTom.png";

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="header-about">
          <nav className="position-site about">
            <Link to="/">Inicio</Link>
            <Link to="/about">Acerca de</Link>
            <span>Esta es tu posición en la app</span>
          </nav>
          <Imgtitle />
        </header>
        <section className="team">
          <div>
            <h2 style={{ textAlign: "center" }}>
              Tenemos un gran equipo de profesionales detras de MathForAll
            </h2>
          </div>
          <div>
            <div className="card-images">
              <img src={josue} alt="Equipo de MATHFORALL" />
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default About;
