import { use, useState } from "react";

export function usePoketipoLogic() {
    const [perguntaAtual, setPerguntaAtual] = useState(null);
    const [pontos, setPontos] = useState(0);
    const [feedback, setFeedback] = useState(""); // "Acertou!", "Errou!" ou ""
    const [jogoIniciado, setJogoIniciado] = useState(false);
    const [tipoCorreto, setTipoCorreto] = useState([]);
    const [pokemonAtual, setPokemonAtual] = useState(null);
    const [recordePoketipo, setRecordePoketipo] = useState(() => {
        // Tenta pegar o valor salvo
        const salvo = localStorage.getItem("poketipo_recorde");
        // Se existir, converte pra número. Se não, começa com 0.
        return salvo ? parseInt(salvo) : 0;
    });

    // Função para sortear uma nova pergunta
    const gerarPergunta = async () => {
        const idAleatorio = Math.floor(Math.random() * 1010) + 1;

        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${idAleatorio}`
        );
        const data_poke = await response.json();

        const tiposCorretos = data_poke.types.map(
            (item) => item.type.name
        );

        setPokemonAtual({
            nome: data_poke.name,
            imagem: data_poke.sprites.other["official-artwork"].front_default
        });

        setTipoCorreto(tiposCorretos);

        gerarAlternativas(tiposCorretos);

        setFeedback(""); // Limpa o feedback anterior
    };

    const gerarAlternativas = (tiposCorretos) => {
    const alternativas = [...tiposCorretos];

    while (alternativas.length < 4) {
        const tipoAleatorio = DATA_TIPOS[Math.floor(Math.random() * DATA_TIPOS.length)].name;

        if (!alternativas.includes(tipoAleatorio)) {
            alternativas.push(tipoAleatorio);
        }
    }

    // 🔥 TRANSFORMA EM OBJETO COMPLETO
    const alternativasCompletas = alternativas.map((tipo) => {
        const info = DATA_TIPOS.find(t => t.name === tipo);
        return {
            name: tipo,
            label: info?.label || tipo,
            color: info?.color || "bg-gray-400"
        };
    });

    alternativasCompletas.sort(() => Math.random() - 0.5);

    setPerguntaAtual({
        tipos: alternativasCompletas,
    });
};

    // Função chamada ao clicar em "Iniciar"
    const iniciarJogo = () => {
        setPontos(0);
        setJogoIniciado(true);
        gerarPergunta();
    };

    // Função chamada ao clicar em alternativa
    const verificarResposta = (tipoEscolhido) => {
        if (tipoCorreto.includes(tipoEscolhido)) {
            setFeedback("ACERTOU!");

            const novosPontos = pontos + 10; 

            setPontos(novosPontos);

            if (novosPontos > recordePoketipo) {
                setRecordePoketipo(novosPontos);
                // 2. SALVANDO NO NAVEGADOR
                localStorage.setItem("poketipo_recorde", novosPontos.toString());
            }
            // Espera 1 segundo para o jogador ver que acertou e troca
            setTimeout(() => {
                gerarPergunta();
            }, 2000);
        } else {
            setPontos(0);
            setFeedback("ERROU!");
            setTimeout(() => {
            setJogoIniciado(false);
            setPerguntaAtual(null);
            setFeedback("");
            }, 2000);
        }
    };

    // Retorna tudo que a tela precisa saber
    return {
        perguntaAtual,
        pontos,
        feedback,
        jogoIniciado,
        iniciarJogo,
        verificarResposta,
        recordePoketipo,
        tipoCorreto,
        pokemonAtual
    };
}

const DATA_TIPOS = [
  { name: "normal",   label: "Normal",   color: "bg-gray-400" },
  { name: "fire",     label: "Fire",     color: "bg-red-500" },
  { name: "water",    label: "Water",    color: "bg-blue-500" },
  { name: "electric", label: "Electric", color: "bg-yellow-400" },
  { name: "grass",    label: "Grass",    color: "bg-green-500" },
  { name: "ice",      label: "Ice",      color: "bg-cyan-300" },
  { name: "fighting", label: "Fighting", color: "bg-orange-700" },
  { name: "poison",   label: "Poison",   color: "bg-purple-500" },
  { name: "ground",   label: "Ground",   color: "bg-yellow-700" },
  { name: "flying",   label: "Flying",   color: "bg-indigo-300" },
  { name: "psychic",  label: "Psychic",  color: "bg-pink-500" },
  { name: "bug",      label: "Bug",      color: "bg-lime-500" },
  { name: "rock",     label: "Rock",     color: "bg-stone-500" },
  { name: "ghost",    label: "Ghost",    color: "bg-indigo-700" },
  { name: "dragon",   label: "Dragon",   color: "bg-indigo-900" },
  { name: "dark",     label: "Dark",     color: "bg-gray-800" },
  { name: "steel",    label: "Steel",    color: "bg-slate-400" },
  { name: "fairy",    label: "Fairy",    color: "bg-pink-300" }
];

