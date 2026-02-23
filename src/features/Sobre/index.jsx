import { Link } from "react-router-dom";

function Sobre () {
    return(
        <div className='flex justify-center items-start min-h-screen p-6 text-white bg-linear-to-br from-slate-950 via-slate-900 to-slate-800'>
            
            <div className='w-full max-w-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-3xl shadow-2xl p-6 md:p-10'>
                
                <h1 className="text-center text-3xl md:text-4xl font-extrabold mb-6 tracking-wide text-emerald-400">
                    Sobre
                </h1>

                <div className="space-y-4 text-sm md:text-base leading-relaxed text-slate-200">
                    
                    <p>
                        Fiz esse projetinho no tempo livre 👨‍💻✨
                    </p>

                    <p>
                        A ideia era simples: criar alguns minigames interativos pra testar lógica, UI e brincar com APIs — mas acabou virando algo bem mais divertido do que eu imaginava 😄
                    </p>

                    <p>
                        Tem jogo de adivinhar tipo de Pokémon, identificar nomes e outras ideias que fui explorando ao longo do desenvolvimento.
                    </p>

                    <p>
                        Tudo feito na raça, aprendendo e ajustando no caminho.
                    </p>

                    <Link to="https://github.com/Cliffordreis/ReactDex">
                    <p className="text-emerald-400 font-semibold">
                        click aqui se quiser ver o código no GitHub.
                    </p></Link>

                    <p className="text-center text-sm text-slate-400 mt-6">
                        Feedbacks são muito bem-vindos!
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Sobre;