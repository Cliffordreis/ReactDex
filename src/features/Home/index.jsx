import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen text-white flex flex-col items-center px-6 py-10 bg-linear-to-br from-[#050c6c] via-[#0a1172] to-[#020617]">

      {/* HERO */}
      <div className="text-center max-w-4xl mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          ReactDex
        </h1>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          É um projeto de <span className="text-indigo-400 font-semibold">minigames interativos</span> com Pokémons, Pokedex, Digimons e até remédios,
          uma pequena brincadeira usando dados de APIs em tempo real.
        </p>
      </div>

      {/* SOBRE RÁPIDO */}
      <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-3xl mb-12">
        <h2 className="text-2xl font-bold mb-3 text-indigo-400">
          💡 Porque criei o ReactDex?
        </h2>

        <p className="text-gray-300 leading-relaxed">
          O ReactDex é um projeto pessoal onde exploro conceitos de desenvolvimento
          com React criando experiências interativas.  
          A ideia é aprender consumo de API no front-end com o React com algo pessoalmente gosto, <Link to="/Sobre" className="text-indigo-400 hover:underline">saiba mais sobre o projeto aqui. </Link>
        </p>
      </div>

      {/* MINIGAMES */}
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-6 text-center">
          🎮 Minigames disponíveis
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">
              Buladex
            </h3>
            <p className="text-gray-300 mb-4">
              Você consegue adivinhar quais nomes são pokémons ou remédios? Um desafio teste seus conhecimentos!
            </p>
            <Link to="/Buladex">
              <button className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg font-semibold transition">
                Jogar
              </button>
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">
              Poketipo
            </h3>
            <p className="text-gray-300 mb-4">
              Você sabe quais são os tipos corretos de cada Pokémon? vamos testar seus conhecimentos!
            </p>
            <Link to="/Poketipo">
              <button className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg font-semibold transition">
                Jogar
              </button>
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-2">
              Digipokemon
            </h3>
            <p className="text-gray-300 mb-4">
              Um desafio rápido, você consegue diferenciar os universos somente através dos nomes dos monstrinhos?
            </p>
            <Link to="/Digipokemon">
              <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg font-semibold transition">
                Jogar
              </button>
            </Link>
          </div>

        </div>
      </div>

      {/* DIFERENCIAL */}
      <div className="mt-16 max-w-3xl text-center">
        <h2 className="text-2xl font-bold mb-3 text-indigo-400">
          🚀 Por trás do projeto
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Esse projeto foi desenvolvido no tempo livre com foco em aprendizado prático:
          consumo de APIs, manipulação de estado, lógica de jogo e construção de UI moderna.
          Tudo evoluindo passo a passo, testando ideias e melhorando a cada versão.
        </p>
      </div>

    </div>
  );
}

export default Home;