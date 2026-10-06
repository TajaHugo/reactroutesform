import React, { Component } from 'react'
export default class Collatz extends Component {

    number = React.createRef()
    aux = []
    onFormSubmit = (event) => {
        event.preventDefault()
        let num = parseInt(this.number.current.value)

        while (num !== 1) {
            if (num % 2 === 0) {
                num = num / 2
            } else {
                num = (num * 3) + 1
            }
            this.aux.push(num)
        }
        this.setState({ 
            numeros: this.aux
         })
    }

    state = {
        numeros: []
    }



    render() {
        return (

            <div>
                <h1>Conjetura de Collatz</h1>
                <form onSubmit={this.onFormSubmit}>
                    <label htmlFor="">Numero</label>
                    <input type="number" ref={this.number} name="number" id="num" />
                    <button>Enviar</button>
                </form>
                <ul>
                    {
                        this.state.numeros.map((n, index) => {
                            return (<li key={index}>{n}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }
}
