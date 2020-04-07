// Dependecies
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./Components/css/bootstrap.min.css";

// styles
import "./Components/css/nav.css";
import "./Components/css/section.css";
import "./Components/css/bootstrap.min.css";
import "./Components/css/animate.css";

// Components
import Home from "./pages/index";
// import About from './Components/About'
import Layout from "./Components/Layout";
import Page404 from "./pages/NotFound";
import Cursos from "./pages/cursos";
import About from "./pages/about";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Layout>
            <Route exact path="/cursos" component={Cursos} />
            <Route component={Page404} />
            <Route exact path="/about" component={About} />
          </Layout>
        </Switch>
      </Router>
    );
  }
}

export default App;

console.clear()

console.log(
  "%c ATENCIÓN!, este es un entorno que solo esta permitido para desarrolladores del sitio favor no intentar ejecutar ningun código en esta consola sin importar el motivo; Si tiene problemas en el sitio contactar a yo@gmail.com, ni intene hackear el sitio con malos motivos debido a que es ilegal y no lograra nada",
  "text-align:center; color:red; font-size:30px; padding:250px"
);
