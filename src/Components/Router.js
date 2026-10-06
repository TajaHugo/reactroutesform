import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Cine from './Cine'
import Musica from './Musica'
import FormSimple from './FormSimple'
export default class Router extends Component {
    render() {
        return (
            //Es neceario importar BrowseRouter, Routes y Route de react-router-dom
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cine" element={<Cine/>}/>
                    <Route path="/musica" element={<Musica/>}/>
                    <Route path="/form" element={<FormSimple/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}
