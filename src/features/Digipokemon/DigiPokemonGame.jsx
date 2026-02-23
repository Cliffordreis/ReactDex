import { Link } from "react-router-dom";
import { useDigiPokemonLogic } from "./LogicDigiPokemon.js";

function DigiPokemonGame() {
    // CONECTANDO O CÉREBRO:
    // Pegamos as funções e variáveis de dentro do LogicDigipokemon
    const { 
        perguntaAtual, 
        pontos, 
        feedback, 
        jogoIniciado, 
        iniciarJogo, 
        verificarResposta, 
        recordeDigipokemon,
    } = useDigiPokemonLogic();

    return (
        <div className="flex justify-center items-start min-h-screen p-4 pt-10 md:pt-24 card-anm-in">
            
            <div className="relative w-full max-w-2xl">
                {/* PLACAR (Opcional - para ver funcionando) */}
                {/* Pokedex */}
                <img 
                    src="/pokedex.png" 
                    alt="Pokedex" 
                    className="w-full h-auto drop-shadow-2xl" 
                />
                <div className="absolute top-[30.5%] left-[52.5%] w-[45%] h-[20%] flex items-center justify-center">
                    <h2 className="text-1xl md:text-3xl font-bold uppercase tracking-widest text-center animate-pulse text-emerald-400">
                        Pontos: {pontos}
                    </h2>
                </div>
                <div className="absolute top-[76.5%] left-[-3%] w-[45%] h-[20%] flex items-center justify-center">
                    <p className="text-[8px] md:text-xs font-bold uppercase tracking-widest text-center animate-pulse text-emerald-800">
                        Record: <br />
                            {recordeDigipokemon}
                    </p>
                </div>
                {/* seta <- */}
                <div className="absolute top-[-1%] left-[-13%] w-[45%] h-[20%] flex items-center justify-center">
                    <Link to="/Buladex" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="size-5 md:size-7 text-cyan-800 animate-pulse hover:scale-110"> 
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </Link>
                </div>
                {/* texto tela */}
                <div className="absolute top-[34%] left-[2%] w-[45%] h-[20%] flex items-center justify-center">
                        {feedback ? (
                        <h2 className={`text-1xl md:text-4xl font-bold uppercase tracking-widest text-center animate-bounce ${feedback === 'ACERTOU!' ? 'text-green-400' : 'text-red-500'}`}>
                            {feedback}
                        </h2>
                        ) : (
                            <h2 className="text-white font-mono text-xs md:text-2xl lg:text-lg font-bold uppercase tracking-widest text-center animate-pulse">
                                {/* Se o jogo iniciou mostra o nome, senão mostra "---" */}
                                {jogoIniciado && perguntaAtual
                                    ? perguntaAtual.nome.split(" ").map((palavra, i) => (
                                        <span key={i} className="block">
                                            {palavra}
                                        </span>
                                        ))
                                    : "---"}
                            </h2>
                        )}
                </div>
                {/* botões */}
                <div className="absolute bottom-[21.5%] right-[6%] w-[38%] flex justify-center gap-1 md:gap-2">
                    <button onClick={iniciarJogo} className="flex-1 py-1 md:py-1.5 bg-green-500 hover:bg-green-400 text-white text-xs md:text-lg rounded-lg font-bold border-b-4 border-green-700 active:border-0 active:translate-y-1 transition-all shadow-lg">
                        {jogoIniciado ? "Reiniciar" : "Iniciar"}
                    </button>
                </div>
                <div className="absolute bottom-[9%] right-[6%] w-[38%] flex justify-center gap-1 md:gap-2">
                    
                <button 
                    onClick={() => verificarResposta('Pokémon')}
                    disabled={!jogoIniciado}
                    className={`
                        flex-1 py-1 md:py-1 text-white text-xs md:text-lg rounded-lg font-bold border-b-4 transition-all shadow-lg
                        ${jogoIniciado 
                            ? "bg-blue-500 hover:bg-blue-400 border-blue-700 active:border-0 active:translate-y-1"
                            : "bg-gray-500 border-gray-700 cursor-not-allowed"}
                    `}
                >
                    {jogoIniciado ? "Pokémon" : "-"}
                </button>

                <button 
                    onClick={() => verificarResposta('Digimon')}
                    disabled={!jogoIniciado}
                    className={`
                        flex-1 py-1 md:py-1 text-white text-xs md:text-lg rounded-lg font-bold border-b-4 transition-all shadow-lg
                        ${jogoIniciado 
                            ? "bg-yellow-500 hover:bg-yellow-400 border-yellow-700 active:border-0 active:translate-y-1"
                            : "bg-gray-500 border-gray-700 cursor-not-allowed"}
                    `}
                >
                    {jogoIniciado ? "Digimon" : "-"}
                </button>

                </div>

            </div>
        </div>
    )

}


export default DigiPokemonGame;