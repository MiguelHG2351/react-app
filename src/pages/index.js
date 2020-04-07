import React, { Component } from 'react'

// Components
import Imgtitle from '../Components/imgtitle'
import Cursos from '../Components/cursos_index'
import Info from '../Components/info'
import Layout from '../Components/Layout'

class Index extends Component {
    render() {
        return <React.Fragment>
            <header className="header-site">
                <Layout />
                <Imgtitle/>
            </header>
            <section style={{width: '100%'}}>
                <header>
                <Cursos></Cursos>
                </header>
                <article>
                    <Info></Info>
                </article>
            </section>
            <div className="mover">
                <div>
                <blockquote>
                    <span>Anónimo.</span>
                </blockquote>
                <cite>
                    El que aprende matemáticas aprende a pensar, a razonar, a analizar; y por ende aplica la lógica en su vida cotidiana y por tanto puede conquistar el Mundo.
                </cite>
                </div>
            </div>
        </React.Fragment>
    }
}

export default Index