import React, { Component } from "react";
import { Link } from "react-router-dom";

//import images
import first from "../Components/images/helloWorld.png";
//  import two from '../Components/images/josueConTom.png'
import fondo from "../Components/images/backdeg.png";
import aprobados from "../Components/images/admitido.png";
//  import cursosAll from '../Components/cursos.json'

class Cursos extends Component {
  constructor() {
    super();
    this.secondary = React.createRef();
    this.courses = React.createRef();
    this.courseSecondary = this.courseSecondary.bind(this);
  }

  courseSecondary() {
    this.courses.current.className = "col-12 py-5 list-course bounceOut";
  }

  admitidoss = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, {id:5}];

  render() {
    return (
      <React.Fragment>
        <nav className="position-site">
          <Link to="/">Inicio</Link>
          <Link to="/cursos">Cursos</Link>
          <span>Esta es tu posición en la app</span>
        </nav>
        <section className="section-course container-fluid">
          <header className="row text-center header-course text-primary">
            <h2 className="col-12 py-5">Tenemos una variedad de cursos</h2>
            <div className="background">
              <img src={fondo} alt="Curso de matemáticas 1er año" />
            </div>
            <div className="col-12 py-5 list-course" ref={this.courses}>
              <div>
                <div>
                  <strong onClick={this.courseSecondary} ref={this.secondary}>
                    Accede al cursos
                  </strong>
                </div>
                <img
                  style={{ transform: "rotateY(180deg)" }}
                  alt="Cursos de Matemáticas 4to año"
                  title="Primer Curso de MathForAll"
                  className="img-responsive"
                  src={first}
                />
              </div>
              <div>
                <div>
                  <strong>Accede al cursos</strong>
                </div>
                <img title="Segundo Curso de MathForAll" src={first} alt="Segundo curso de MathForAll" />
              </div>
              <div>
                <div>
                  <strong onClick={this.coursePrepa}>Accede al cursos</strong>
                </div>
                <img
                  title="Tercer Curso de MathForAll"
                  className="img-responsive"
                  src={first}
                  alt="Tercer curso de MathForAll"
                />
              </div>
              <div>
                <div>
                  <strong>Accede al cursos</strong>
                </div>
                <img
                  title="Cuarto Curso de MathForAll"
                  className="img-responsive"
                  src={first}
                  alt="Cuarto curso de MathForAll"
                />
              </div>
            </div>
          </header>
          <article className="header-article-study">
            <header>
              <h3>¿Por que estudiar en MathForAll?</h3>
            </header>
            <section className="aprobados">
              <div style={{ textAlign: "center" }}>
                <h4>
                  Formamos a estudiante para aprobar examenes en todas la
                  universidades.
                </h4>
              </div>
              <div className="list-course">
                {this.admitidoss.map(e => (
                  <img key={e.id} src={aprobados} alt="Lista de aprobados gracias a nosotros y el esfuerzo de nuestros alumnos" />
                ))}
              </div>
            </section>
          </article>
        </section>
      </React.Fragment>
    );
  }
}

export default Cursos;
