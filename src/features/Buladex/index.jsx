
function Buladex () {
    return(
        <div className='flex items-center p-5 min-h-[80vh] justify-center text-white'>
            <div className=' flex flex-col card-anm-in bg-slate-900 w-full max-w-2xl p-8 shadow-xl rounded-2xl font-bold gap-6'>
                <div>
                    <h1 className="text-4xl font-bold text-center">Buladex</h1>
                </div>
                <div className="flex justify-center items-center gap-3 md:gap-8">
                    <img className="w-32 md:w-52 h-auto object-contain" src="../Remedio.png"></img>
                    <h1 className="font-bold text-3xl md:text-6xl text-slate-400">OU</h1>
                    <img className="w-32 md:w-52 h-auto object-contain" src="../Pokebola.png"></img>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <h2 className='text-white text-2xl text-center'> Neste minigame você deve adivinhar se os nomes apresentados são de pokémons ou remédios!</h2>
                    {/* <Link> */}
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl mt-4 text-3xl">Iniciar!</button>
                    {/* </Link> */} 
                </div>
            </div>
            
        </div>  
    )
}

export default Buladex;