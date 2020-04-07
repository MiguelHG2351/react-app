import React, { Component } from "react";

// Imagenes Importadas
import logo from "./images/logo192.png";
import loader from "./images/loader.gif";
import elseR from "./images/back.jpg";
import defaultImage from "./images/numeropi.PNG";
import imgTwo from "./images/josueConTom.png";
import imgtres from "./images/laravel.png";
import imgFor from "./images/err.PNG";
import imgFive from "./images/frontendlove.png";
import defaultImg from "./images/pc.png";

class CursosSlides extends Component {
  constructor(props) {
    super(props);
    this.imgOne = React.createRef();
    this.addImage = this.addImage.bind(this);
  }

  addImage() {
    const img = Math.floor(Math.random() * 10);
    console.log(img);
    switch (img) {
      case 1:
        this.imgOne.current.src = elseR;
        break;
      case 2:
        this.imgOne.current.src = loader;
        break;
      case 3:
        this.imgOne.current.src = logo;
        break;
      case 4:
        this.imgOne.current.src = imgTwo;
        break;
      case 5:
        this.imgOne.current.src = imgtres;
        break;
      case 6:
        this.imgOne.current.src = imgFor;
        break;
      case 7:
        this.imgOne.current.src = imgFive;
        break;
      default:
        this.imgOne.current.src = defaultImage;
        break;
    }
  }

  state = {
    show: true
  };

  render() {
    return (
      <div className="d-flex center-flex section-course-index">
        <button
          className="btn btn-warning text-primary w-25"
          onClick={this.addImage}
        >
          Prueba tu suerte
        </button>
        <div>
          <img
            className="img-resonsive img-lg-r"
            src={defaultImg}
            ref={this.imgOne}
            alt="Imagenes con referencias a los diferentes cursos de la aplicación"
          />
        </div>
      </div>
    );
  }
}

export default CursosSlides;
