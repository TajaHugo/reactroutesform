import React, { Component } from 'react'
import './index.css'

export default class MenuRutas extends Component {
    render() {
        return (
            <div className='container'>
                <nav className='nav'>
                    <ul>
                        <li>
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li>
                            <a className="nav-link" href="/cine">Cine</a>
                        </li>
                        <li>
                            <a className="nav-link" href="/musica">Música</a>
                        </li>
                        <li>
                            <a className="nav-link" href="/form">Formulario</a>
                        </li>
                        <li>
                            <a className="nav-link" href="/collatz">Collatz</a>
                        </li>
                        <li>
                            <a className="nav-link" href="/tabla">Tabla de multiplicar</a>
                        </li>
                        <li>
                            <a className="nav-link" href="/tablav2">Tabla de multiplicar V2</a>
                        </li>
                        <li>
                            <a className="nav-link" href="/seleccion">Seleccion Multiple</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
