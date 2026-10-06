import React, { Component } from 'react'

export default class TablaMultiplicarV2 extends Component {

    slectNumber = React.createRef()
    table = []
    num = []
    state = {
        tabla: [],
        numeros: []
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        let numb = parseInt(this.slectNumber.current.value)


        for (let i = 1; i <= 10; i++) {
            this.table.push({
                multiplicador: i,
                resultado: numb * i
            })
        }

        this.setState({
            tabla: this.table
        })
    }


    generarNumeros = () => {
        for(let i = 1; i <= 5;i++){
            let aleat = parseInt(Math.random()*50) +1;
            this.num.push(aleat)
        }
        this.setState({
            numeros: this.num
        })
    }

    componentDidMount(){
        this.generarNumeros()
    }

    render() {
        return (
            <div>
                <h1>Tabla de multiplicar V2</h1>

                <button onClick={this.generarNumeros}>Generar numeros</button>
                <form onSubmit={this.onFormSubmit}>
                    <label htmlFor="">Numero</label>
                    <select name="" ref={this.slectNumber} id="">
                        {
                            this.state.numeros.map((num,index) =>{
                                return(<option key={index}>{num}</option>)
                            })
                        }
                    </select>
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
                                <td>{this.slectNumber.current.value} x {n.multiplicador}</td>
                                <td>{n.resultado}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
