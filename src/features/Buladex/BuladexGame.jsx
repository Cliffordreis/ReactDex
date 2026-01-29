function BuladexGame() {
    return (
        <div className="flex justify-center items-start min-h-screen p-4 pt-10 md:pt-24 card-anm-in">
            
            <div className="relative w-full max-w-2xl">
                
                <img 
                    src="/pokedex.png" 
                    alt="Pokedex" 
                    className="w-full h-auto drop-shadow-2xl" 
                />

                <div className="absolute top-[34%] left-[2%] w-[45%] h-[20%] flex items-center justify-center">
                    {/* DICA: Adicione border-2 border-red-500 aqui temporariamente para ver onde a caixa está! */}
                    <h2 className="text-white font-mono text-xl md:text-3xl lg:text-4xl font-bold uppercase tracking-widest text-center animate-pulse">
                        Dipirona
                    </h2>
                </div>

                <div className="absolute bottom-[9%] right-[6%] w-[38%] flex justify-center gap-1 md:gap-2">
                    
                    <button className="flex-1 py-1 md:py-1 bg-blue-500 hover:bg-blue-400 text-white text-xs md:text-lg rounded-lg font-bold border-b-4 border-blue-700 active:border-0 active:translate-y-1 transition-all shadow-lg">
                        Remédio
                    </button>

                    <button className="flex-1 py-1 md:py-1 bg-yellow-500 hover:bg-yellow-400 text-white text-xs md:text-lg rounded-lg font-bold border-b-4 border-yellow-700 active:border-0 active:translate-y-1 transition-all shadow-lg">
                        Pokémon
                    </button>

                </div>

            </div>
        </div>
    )
}

export default BuladexGame;