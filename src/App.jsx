import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './features/Home';
import Buladex from './features/Buladex';
import Header from './components/Header'

import { useState } from 'react'

function App() {
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/buladex" element={<Buladex />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
