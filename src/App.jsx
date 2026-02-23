import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './features/Home';
import Buladex from './features/Buladex';
import Header from './components/Header';
import Poketipo from './features/Poketipo';
import Digipokemon from './features/Digipokemon';
import Sobre from './features/Sobre';
import BuladexGame from './features/Buladex/Buladexgame';
import PoketipoGame from './features/Poketipo/PoketipoGame';
import DigiPokemonGame from './features/Digipokemon/DigiPokemonGame';

function App() {
  return (
    <BrowserRouter basename="/ReactDex">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/buladex" element={<Buladex />} />
        <Route path="/buladex/game" element={<BuladexGame />} />

        <Route path="/poketipo" element={<Poketipo />} />
        <Route path="/poketipo/game" element={<PoketipoGame />} />

        <Route path="/digipokemon" element={<Digipokemon />} />
        <Route path="/digipokemon/game" element={<DigiPokemonGame />} />

        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;