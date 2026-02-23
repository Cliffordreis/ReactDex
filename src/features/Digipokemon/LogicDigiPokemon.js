import { useState } from "react";

export function useDigiPokemonLogic() {
    const [perguntaAtual, setPerguntaAtual] = useState(null);
    const [pontos, setPontos] = useState(0);
    const [recorde, setRecorde] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [jogoIniciado, setJogoIniciado] = useState(false);
    const [recordeDigipokemon, setRecordeDigipokemon] = useState(() => {
        // Tenta pegar o valor salvo
        const salvo = localStorage.getItem("DigiPokemon_recorde");
        // Se existir, converte pra número. Se não, começa com 0.
        return salvo ? parseInt(salvo) : 0;
    });

    // 🎮 Iniciar / Reiniciar jogo
    const iniciarJogo = () => {
        setPontos(0);
        setFeedback("");
        setJogoIniciado(true);
        gerarPergunta();
    };

    // 🎲 Gerar pergunta
    const gerarPergunta = async () => {
        const tipoSorteado = Math.floor(Math.random() * 2); // 0 ou 1

        try {
            if (tipoSorteado === 0) {
                // 🔵 POKEMON
                const id = Math.floor(Math.random() * 1010) + 1;

                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await response.json();

                setPerguntaAtual({
                    nome: data.name,
                    resposta: "Pokémon"
                });

            } else {
                // 🟡 DIGIMON
                const id = Math.floor(Math.random() * 1400) + 1;

                const response = await fetch(`https://digi-api.com/api/v1/digimon/${id}`);
                const data = await response.json();

                setPerguntaAtual({
                    nome: data.name,
                    resposta: "Digimon"
                });
            }

            setFeedback("");

        } catch (error) {
            console.error("Erro ao gerar pergunta:", error);
        }
    };

    // ✅ Verificar resposta
    const verificarResposta = (respostaUsuario) => {
        if (!perguntaAtual) return;

        if (respostaUsuario === perguntaAtual.resposta) {
            setFeedback("ACERTOU!");

            const novosPontos = pontos + 10; 

            setPontos(novosPontos);

            if (novosPontos > recordeDigipokemon) {
                setRecordeDigipokemon(novosPontos);
                // 2. SALVANDO NO NAVEGADOR
                localStorage.setItem("DigiPokemon_recorde", novosPontos.toString());
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

    return {
        perguntaAtual,
        pontos,
        feedback,
        jogoIniciado,
        iniciarJogo,
        verificarResposta,
        recordeDigipokemon
    };
}