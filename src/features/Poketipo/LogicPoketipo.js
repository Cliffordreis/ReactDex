import { use, useState } from "react";

export function usePoketipoLogic() {
    const [perguntaAtual, setPerguntaAtual] = useState(null);
    const [pontos, setPontos] = useState(0);
    const [feedback, setFeedback] = useState(""); // "Acertou!", "Errou!" ou ""
    const [jogoIniciado, setJogoIniciado] = useState(false);
    const [recordePoketipo, setRecordePoketipo] = useState(() => {
        // Tenta pegar o valor salvo
        const salvo = localStorage.getItem("poketipo_recorde");
        // Se existir, converte pra número. Se não, começa com 0.
        return salvo ? parseInt(salvo) : 0;
    });

    // Função para sortear uma nova pergunta
    const gerarPergunta = () => {
        const randomIndex = Math.floor(Math.random() * DATA.length);
        setPerguntaAtual(DATA[randomIndex]);
        setFeedback(""); // Limpa o feedback anterior
    };

    // Função chamada ao clicar em "Iniciar"
    const iniciarJogo = () => {
        setPontos(0);
        setJogoIniciado(true);
        gerarPergunta();
    };

    // Função chamada ao clicar em "remedio" ou "Pokémon"
    const verificarResposta = (tipoEscolhido) => {
        if (!perguntaAtual) return;

        if (tipoEscolhido === perguntaAtual.tipo) {
            setFeedback("ACERTOU!");
            // 1. CALCULA O NOVO VALOR AQUI FORA
            const novosPontos = pontos + 10; 
            
            // 2. ATUALIZA O ESTADO COM O VALOR CALCULADO
            setPontos(novosPontos);

            // 3. USA O VALOR CALCULADO PARA O RECORDE
            // Agora sim ele sabe que é 10, 20, 30... na hora certa.
            if (novosPontos > recorde) {
                setRecordePoketipo(novosPontos);
                // 2. SALVANDO NO NAVEGADOR
                localStorage.setItem("poketipo_recorde", novosPontos.toString());
            }
            // Espera 1 segundo para o jogador ver que acertou e troca
            setTimeout(() => {
                gerarPergunta();
            }, 3000);
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
        recordePoketipo
    };
}
