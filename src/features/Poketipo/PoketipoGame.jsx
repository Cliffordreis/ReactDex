import { Link } from "react-router-dom";
import { usePoketipoLogic } from "./LogicPoketipo";

function PoketipoGame() {
    // CONECTANDO O CÉREBRO:
    // Pegamos as funções e variáveis de dentro do LogicPoketipo
    const { 
        perguntaAtual, 
        pontos, 
        feedback, 
        jogoIniciado, 
        iniciarJogo, 
        verificarResposta, 
        recordePoketipo
    } = usePoketipoLogic();

    const gerarAlternativas = (tiposCorretos) => {
        // sorteia 1 tipo correto
        const tipoCorretoSorteado =
            tiposCorretos[Math.floor(Math.random() * tiposCorretos.length)];

        // pega o objeto completo do tipo correto
        const tipoCorretoObj = DATA_TIPOS.find(
            tipo => tipo.name === tipoCorretoSorteado
        );

        // remove o correto dos errados
        const tiposErrados = DATA_TIPOS.filter(
            tipo => tipo.name !== tipoCorretoSorteado
        );

        // embaralha errados
        const erradosEmbaralhados = [...tiposErrados].sort(
            () => 0.5 - Math.random()
        );

        // pega 3 errados
        const tresErrados = erradosEmbaralhados.slice(0, 3);

        // junta tudo
        const alternativas = [
            tipoCorretoObj,
            ...tresErrados
        ];

        // embaralha novamente
        return alternativas.sort(() => 0.5 - Math.random());
    };



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
                            {recordePoketipo}
                    </p>
                </div>
                {/* seta <- */}
                <div className="absolute top-[-1%] left-[-13%] w-[45%] h-[20%] flex items-center justify-center">
                    <Link to="/Poketipo" >
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
                            <h2 className="text-white font-mono text-xs md:text-2xl lg:text-2xl font-bold uppercase tracking-widest text-center animate-pulse">
                                {/* Se o jogo iniciou mostra o nome, senão mostra "---" */}
                                {jogoIniciado && perguntaAtual ? perguntaAtual.nome : "---"}
                            </h2>
                        )}
                </div>
                {/* botões */}
                <div className="absolute bottom-[34.5%] right-[7%] w-[36%] h-[15%] flex justify-center gap-1 md:gap-2">
                    <button onClick={iniciarJogo} className="flex-1 py-1 md:py-1.5 bg-green-500 hover:bg-green-400 text-white text-xs md:text-lg rounded-lg font-bold border-b-4 border-green-700 active:border-0 active:translate-y-1 transition-all shadow-lg">
                        {jogoIniciado ? "Reiniciar" : "Iniciar"}
                    </button>
                </div>
                <div className="absolute bottom-[21.5%] right-[6%] w-[38%] flex justify-center gap-1 md:gap-2">
                    
                    <button onClick={() => verificarResposta('remedio')} // <--- Responde Remédio
                        disabled={!jogoIniciado} // Desabilita se não iniciou
                     className="flex-1 py-1 md:py-1 bg-blue-500 hover:bg-blue-400 text-white text-xs md:text-lg rounded-lg font-bold border-b-4 border-blue-700 active:border-0 active:translate-y-1 transition-all shadow-lg">
                        Tipo
                    </button>

                    <button onClick={() => verificarResposta('pokemon')} // <--- Responde Pokémon
                        disabled={!jogoIniciado} // Desabilita se não iniciou
                     className="flex-1 py-1 md:py-1 bg-yellow-500 hover:bg-yellow-400 text-white text-xs md:text-lg rounded-lg font-bold border-b-4 border-yellow-700 active:border-0 active:translate-y-1 transition-all shadow-lg">
                        Tipo
                    </button>

                </div>
                <div className="absolute bottom-[9%] right-[6%] w-[38%] flex justify-center gap-1 md:gap-2">
                    
                    <button onClick={() => verificarResposta('remedio')} // <--- Responde Remédio
                        disabled={!jogoIniciado} // Desabilita se não iniciou
                     className="flex-1 py-1 md:py-1 bg-blue-500 hover:bg-blue-400 text-white text-xs md:text-lg rounded-lg font-bold border-b-4 border-blue-700 active:border-0 active:translate-y-1 transition-all shadow-lg">
                        Tipo
                    </button>

                    <button onClick={() => verificarResposta('pokemon')} // <--- Responde Pokémon
                        disabled={!jogoIniciado} // Desabilita se não iniciou
                     className="flex-1 py-1 md:py-1 bg-yellow-500 hover:bg-yellow-400 text-white text-xs md:text-lg rounded-lg font-bold border-b-4 border-yellow-700 active:border-0 active:translate-y-1 transition-all shadow-lg">
                        Tipo
                    </button>

                </div>

            </div>
        </div>
    )

}


export default PoketipoGame;