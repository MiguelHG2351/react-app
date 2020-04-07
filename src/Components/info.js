import React, { Component } from "react";
import imgOne from "./images/persona.png";
import imgTwo from "./images/josueConTom.png";
import back from "./images/back.jpg";
// import bezel from './bezel'

// CSS.paintWorklet.addModule(bezel)

class Info extends Component {
  constructor() {
    super();
    this.title = React.createRef();
    this.colorNew = this.colorNew.bind(this);
  }

  colorNew() {
    console.log(this.title);
    this.title.current.style.color = "red";
  }

  render() {
    return (
      <div>
        <div style={{ flexDirection: "column" }} className="center-flex">
          <h3
            style={{
              textAlign: "center",
              boxShadow: "2px 1px 3px 1px black",
              padding: "14px",
              cursor: "default",
              width: "95%"
            }}
          >
            ESTUDIAS CON LOS MEJORES, ESTUDIA EN MATHFORALL.
          </h3>
          <button
            onClick={this.colorNew}
            className="btnBezel"
            style={{ color: "#000" }}
            ref={this.title}
          >
            Acceder a Cursos
          </button>
        </div>
        <div style={{ padding: "1em" }} className="line-image">
          <img src={imgOne} alt="tipos De cursos de MathForAll" />
          <img src={imgTwo} alt="Recursos Academicos" />
          <img
            src={back}
            alt="Maestros altamente capacitados que te ayudaran en el transcurso de todo el curso"
          />
        </div>
      </div>
    );
  }
}

export default Info;
