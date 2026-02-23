import { Link } from 'react-router-dom';   

function Digipokemon () {
    return(
        <div className='flex justify-center items-start min-h-screen p-6 text-white'>
            
            <div className='w-full max-w-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-3xl shadow-2xl p-6 md:p-10'>
                <div>
                    <h1 className="text-4xl font-bold text-center text-emerald-400">DigiPokemon</h1>
                </div>
                <div className="flex justify-center items-center gap-3 md:gap-8">
                    <img className="w-32 md:w-52 h-auto object-contain" src="../PokemonLogo.png"></img>
                    <h1 className="font-bold text-3xl md:text-6xl text-slate-400">OU</h1>
                    <img className="w-32 md:w-52 h-auto object-contain" src="../DigimonLogo.png"></img>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <h2 className='text-white text-2xl text-center'> Neste minigame você deve adivinhar se a imagem se trata de um Pokémon ou um Digimon!</h2>
                    <Link to="/DigiPokemon/Game">
                        <button className="flex-1 w-30 py-3 md:py-3 bg-blue-500 hover:bg-blue-400 text-white text-xl md:text-2xl rounded-lg font-bold border-b-4 border-blue-700 active:border-0 active:translate-y-1 transition-all shadow-lg">Iniciar!</button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Digipokemon;