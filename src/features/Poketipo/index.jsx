
function Poketipo () {
    return(
        <div className='flex items-center p-5 min-h-[80vh] justify-center text-white'>
            <div className=' flex flex-col card-anm-in bg-slate-900 w-full max-w-2xl p-8 shadow-xl rounded-2xl font-bold gap-6'>
                <div>
                    <h1 className="text-4xl font-bold text-center">Poketipo</h1>
                </div>
                <div className="flex justify-center items-center gap-3 md:gap-8">
                    <img className="w-65 md:w-90 h-auto object-contain" src="../PikachuTipos.png"></img>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <h2 className='text-white text-2xl text-center'> Neste minigame você deve adivinhar o tipo do pokémon entre algumas opções!</h2>
                    {/* <Link> */}
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl mt-4 text-3xl">Iniciar!</button>
                    {/* </Link> */} 
                </div>
            </div>
            
        </div> 
    )
}

export default Poketipo;