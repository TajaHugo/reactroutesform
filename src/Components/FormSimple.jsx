import React, { Component } from 'react'

export default class FormSimple extends Component {
    //VARIABLES QUE HACEN REFERENCIA A LOS DATOS
    nombre = React.createRef();

    onSendForm = (event) => {
        //DEVEMOS DETENER EL SUMIT USANDO preventDefault()
        event.preventDefault()
        
        console.log(this.nombre.current.value)
    }

    render() {
        return (
            <div>
                <h1>FormSimple</h1>
                <form onSubmit={this.onSendForm}>
                    <label htmlFor="">Name</label><br />
                    <input type="text" name='name' ref={this.nombre} /><br />
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}
