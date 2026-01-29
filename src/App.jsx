import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './features/Home';
import Buladex from './features/Buladex';
import Header from './components/Header'
import Poketipo from './features/Poketipo';
import Digipokemon from './features/Digipokemon';
import Sobre from './features/Sobre';

import { useState } from 'react'

function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/buladex" element={<Buladex />} />
        <Route path="/Poketipo" element={<Poketipo />} />
        <Route path="/Digipokemon" element={<Digipokemon />} />
        <Route path="/Sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
