import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    number = React.createRef()

    state = {
        tabla: []
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        const num = parseInt(this.number.current.value)

        const table = []

        for (let i = 1; i <= 10; i++) {
            table.push({
                multiplicador: i,
                resultado: num * i
            })
        }

        this.setState({ 
            tabla : table 
        })
    }

    render() {
        return (
            <div>
                <h1>Tabla de multiplicar</h1>
                <form onSubmit={this.onFormSubmit}>
                    <label htmlFor="num">Número</label>
                    <input type="number" ref={this.number} name="number" id="num" />
                    <button>Enviar</button>
                </form>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Operacion</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tabla.map((n, index) => (
                        <tr key={index}>
                            <td>{this.number.current.value} x {n.multiplicador}</td>
                            <td>{n.resultado}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        )
    }
}   