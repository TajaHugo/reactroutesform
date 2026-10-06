import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Cine from './Cine'
import Musica from './Musica'
import FormSimple from './FormSimple'
import Collatz from './Collatz'
import TablaMultiplicar from './TablaMultiplicar'
import TablaMultiplicarV2 from './TablaMultiplicarV2'
import SeleccionMultiple from './SeleccionMultiple'
export default class Router extends Component {
    render() {
        return (
            //Es neceario importar BrowseRouter, Routes y Route de react-router-dom
            <BrowserRouter>
                <main className="page-content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/cine" element={<Cine/>}/>
                        <Route path="/musica" element={<Musica/>}/>
                        <Route path="/form" element={<FormSimple/>}/>
                        <Route path='/collatz' element = {<Collatz/>}/>
                        <Route path='/tabla' element = {<TablaMultiplicar/>}/>
                        <Route path='/tablav2' element = {<TablaMultiplicarV2/>}/>
                        <Route path='/seleccion' element = {<SeleccionMultiple/>}/>
                    </Routes>
                </main>
            </BrowserRouter>
        )
    }
}
