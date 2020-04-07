import React, { Component } from "react";
import { Link } from "react-router-dom";

class Page404 extends Component {
  render() {
    return (
      <React.Fragment>
        <h6>No existe la ruta que ha ingresado</h6>
        <Link style={{ color: "red" }} to="/">
          Puedes regresar de nuevo al inicio
        </Link>
      </React.Fragment>
    );
  }
}

export default Page404;
