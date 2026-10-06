import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {
  
    selectMultiple = React.createRef()
    state = {
        seleccionados: ""
    }

    mostrarSeleccionados = (event) => {
        event.preventDefault()
        //USAR OPTIONS EN VEZ DE VALUE
        let options = this.selectMultiple.current.options;
        let data = ""

        for(var opt of options){
            if(opt.selected === true){data += opt.value + ", "}
        }
        this.setState({
            seleccionados : data
        })
    }
  
  
    render() {
    return (
      <div>
        <h1>Selección Multiple</h1>
        <h3 style={{color:"red"}}>{this.state.seleccionados}</h3>
        <form onSubmit={this.mostrarSeleccionados}>
            <label htmlFor="">Selecciones elementos: </label>
            <select  size ="6" multiple ref={this.selectMultiple}>
                <option>Elemento 1</option>
                <option>Elemento 2</option>
                <option>Elemento 3</option>
                <option>Elemento 4</option>
                <option>Elemento 5</option>
                <option>Elemento 6</option>
                <option>Elemento 7</option>
            </select><br />
            <button>Show selected</button>
        </form>
      </div>
      
    )
  }
}
