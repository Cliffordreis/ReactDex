import { use, useState } from "react";

export function useBuladexLogic() {
    const [perguntaAtual, setPerguntaAtual] = useState(null);
    const [pontos, setPontos] = useState(0);
    const [feedback, setFeedback] = useState(""); // "Acertou!", "Errou!" ou ""
    const [jogoIniciado, setJogoIniciado] = useState(false);
    const [recorde, setRecorde] = useState(() => {
        // Tenta pegar o valor salvo
        const salvo = localStorage.getItem("buladex_recorde");
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
                setRecorde(novosPontos);
                // 2. SALVANDO NO NAVEGADOR
                localStorage.setItem("buladex_recorde", novosPontos.toString());
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
        recorde
    };
}





const DATA = [
    { nome: "Zolpidem", tipo: "remedio" }, { nome: "Alprazolam", tipo: "remedio" }, { nome: "Lorazepam", tipo: "remedio" }, { nome: "Clonazepam", tipo: "remedio" }, { nome: "Midazolam", tipo: "remedio" }, { nome: "Tizanidina", tipo: "remedio" },
    { nome: "Baclofeno", tipo: "remedio" }, { nome: "Venlafaxina", tipo: "remedio" }, { nome: "Duloxetina", tipo: "remedio" }, { nome: "Fluoxetina", tipo: "remedio" }, { nome: "Sertralina", tipo: "remedio" },
    { nome: "Paroxetina", tipo: "remedio" }, { nome: "Escitalopram", tipo: "remedio" }, { nome: "Citalopram", tipo: "remedio" }, { nome: "Mirtazapina", tipo: "remedio" }, { nome: "Quetiapina", tipo: "remedio" }, { nome: "Olanzapina", tipo: "remedio" }, { nome: "Risperidona", tipo: "remedio" },
    { nome: "Arbok", tipo: "pokemon" }, { nome: "Muk", tipo: "pokemon" }, { nome: "Weezing", tipo: "pokemon" }, { nome: "Tentacruel", tipo: "pokemon" }, { nome: "Cloyster", tipo: "pokemon" }, { nome: "Hypno", tipo: "pokemon" }, { nome: "Exeggutor", tipo: "pokemon" }, { nome: "Starmie", tipo: "pokemon" }, { nome: "Omastar", tipo: "pokemon" }, { nome: "Kabutops", tipo: "pokemon" },
    { nome: "Aerodactyl", tipo: "pokemon" }, { nome: "Dragonair", tipo: "pokemon" }, { nome: "Dragonite", tipo: "pokemon" }, { nome: "Mewtwo", tipo: "pokemon" }, { nome: "Meganium", tipo: "pokemon" }, { nome: "Feraligatr", tipo: "pokemon" }, { nome: "Typhlosion", tipo: "pokemon" }, { nome: "Crobat", tipo: "pokemon" }, { nome: "Lanturn", tipo: "pokemon" }, { nome: "Ampharos", tipo: "pokemon" },
    { nome: "Bellossom", tipo: "pokemon" }, { nome: "Azumarill", tipo: "pokemon" }, { nome: "Sudowoodo", tipo: "pokemon" }, { nome: "Politoed", tipo: "pokemon" }, { nome: "Jumpluff", tipo: "pokemon" }, { nome: "Sunflora", tipo: "pokemon" }, { nome: "Quagsire", tipo: "pokemon" }, { nome: "Espeon", tipo: "pokemon" }, { nome: "Umbreon", tipo: "pokemon" }, { nome: "Slowking", tipo: "pokemon" },
    { nome: "Misdreavus", tipo: "pokemon" }, { nome: "Unown", tipo: "pokemon" }, { nome: "Forretress", tipo: "pokemon" }, { nome: "Gligar", tipo: "pokemon" }, { nome: "Steelix", tipo: "pokemon" }, { nome: "Granbull", tipo: "pokemon" }, { nome: "Qwilfish", tipo: "pokemon" }, { nome: "Scizor", tipo: "pokemon" }, { nome: "Shuckle", tipo: "pokemon" }, { nome: "Heracross", tipo: "pokemon" },
    { nome: "Sneasel", tipo: "pokemon" }, { nome: "Ursaring", tipo: "pokemon" }, { nome: "Magcargo", tipo: "pokemon" }, { nome: "Corsola", tipo: "pokemon" }, { nome: "Octillery", tipo: "pokemon" }, { nome: "Delibird", tipo: "pokemon" }, { nome: "Mantine", tipo: "pokemon" }, { nome: "Skarmory", tipo: "pokemon" }, { nome: "Houndoom", tipo: "pokemon" }, { nome: "Kingdra", tipo: "pokemon" },
    { nome: "Donphan", tipo: "pokemon" }, { nome: "Porygon2", tipo: "pokemon" }, { nome: "Stantler", tipo: "pokemon" }, { nome: "Smeargle", tipo: "pokemon" }, { nome: "Tyrogue", tipo: "pokemon" }, { nome: "Hitmontop", tipo: "pokemon" }, { nome: "Smoochum", tipo: "pokemon" }, { nome: "Elekid", tipo: "pokemon" }, { nome: "Magby", tipo: "pokemon" }, { nome: "Blissey", tipo: "pokemon" },
    { nome: "Raikou", tipo: "pokemon" }, { nome: "Entei", tipo: "pokemon" }, { nome: "Suicune", tipo: "pokemon" }, { nome: "Lugia", tipo: "pokemon" }, { nome: "Ho-Oh", tipo: "pokemon" }, { nome: "Celebi", tipo: "pokemon" }, { nome: "Sceptile", tipo: "pokemon" }, { nome: "Blaziken", tipo: "pokemon" }, { nome: "Swampert", tipo: "pokemon" }, { nome: "Mightyena", tipo: "pokemon" },
    { nome: "Linoone", tipo: "pokemon" }, { nome: "Dustox", tipo: "pokemon" }, { nome: "Ludicolo", tipo: "pokemon" }, { nome: "Shiftry", tipo: "pokemon" }, { nome: "Pelipper", tipo: "pokemon" }, { nome: "Gardevoir", tipo: "pokemon" }, { nome: "Masquerain", tipo: "pokemon" }, { nome: "Breloom", tipo: "pokemon" }, { nome: "Slaking", tipo: "pokemon" }, { nome: "Ninjask", tipo: "pokemon" },
    { nome: "Shedinja", tipo: "pokemon" }, { nome: "Exploud", tipo: "pokemon" }, { nome: "Hariyama", tipo: "pokemon" }, { nome: "Azurill", tipo: "pokemon" }, { nome: "Nosepass", tipo: "pokemon" }, { nome: "Delcatty", tipo: "pokemon" }, { nome: "Sableye", tipo: "pokemon" }, { nome: "Mawile", tipo: "pokemon" }, { nome: "Aggron", tipo: "pokemon" }, { nome: "Medicham", tipo: "pokemon" },
    { nome: "Manectric", tipo: "pokemon" }, { nome: "Plusle", tipo: "pokemon" }, { nome: "Minun", tipo: "pokemon" }, { nome: "Volbeat", tipo: "pokemon" }, { nome: "Illumise", tipo: "pokemon" }, { nome: "Roselia", tipo: "pokemon" }, { nome: "Gulpin", tipo: "pokemon" }, { nome: "Swalot", tipo: "pokemon" }, { nome: "Carvanha", tipo: "pokemon" }, { nome: "Sharpedo", tipo: "pokemon" },
    { nome: "Wailord ", tipo: "pokemon" }, { nome: "Camerupt ", tipo: "pokemon" }, { nome: "Torkoal ", tipo: "pokemon" }, { nome: "Grumpig", tipo: "pokemon" }, { nome: "Spinda", tipo: "pokemon" }, { nome: "Flygon", tipo: "pokemon" }, { nome: "Cacturne", tipo: "pokemon" }, { nome: "Altaria", tipo: "pokemon" }, { nome: "Zangoose", tipo: "pokemon" }, { nome: "Seviper", tipo: "pokemon" },
    { nome: "Lunatone", tipo: "pokemon" }, { nome: "Solrock", tipo: "pokemon" }, { nome: "Whiscash", tipo: "pokemon" }, { nome: "Crawdaunt", tipo: "pokemon" }, { nome: "Claydol", tipo: "pokemon" }, { nome: "Cradily", tipo: "pokemon" }, { nome: "Armaldo", tipo: "pokemon" }, { nome: "Milotic", tipo: "pokemon" }, { nome: "Castform", tipo: "pokemon" }, { nome: "Kecleon", tipo: "pokemon" },
    { nome: "Banette", tipo: "pokemon" }, { nome: "Dusclops", tipo: "pokemon" }, { nome: "Chimecho", tipo: "pokemon" }, { nome: "Absol", tipo: "pokemon" }, { nome: "Glalie", tipo: "pokemon" }, { nome: "Walrein", tipo: "pokemon" }, { nome: "Huntail", tipo: "pokemon" }, { nome: "Gorebyss", tipo: "pokemon" }, { nome: "Relicanth", tipo: "pokemon" }, { nome: "Luvdisc", tipo: "pokemon" },
    { nome: "Bagon", tipo: "pokemon" }, { nome: "Shelgon", tipo: "pokemon" }, { nome: "Salamence", tipo: "pokemon" }, { nome: "Metagross", tipo: "pokemon" }, { nome: "Regirock", tipo: "pokemon" }, { nome: "Regice", tipo: "pokemon" }, { nome: "Registeel", tipo: "pokemon" }, { nome: "Latias", tipo: "pokemon" }, { nome: "Latios", tipo: "pokemon" }, { nome: "Kyogre", tipo: "pokemon" },
    { nome: "Diltiazem", tipo: "remedio" }, { nome: "Verapamil", tipo: "remedio" }, { nome: "Nifedipino", tipo: "remedio" }, { nome: "Amlodipino", tipo: "remedio" }, { nome: "Felodipino", tipo: "remedio" }, { nome: "Nicardipino", tipo: "remedio" }, { nome: "Isradipino", tipo: "remedio" }, { nome: "Cilnidipino", tipo: "remedio" }, { nome: "Lacidipino", tipo: "remedio" }, { nome: "Lercanidipino", tipo: "remedio" },
    { nome: "Enalapril", tipo: "remedio" }, { nome: "Captopril", tipo: "remedio" }, { nome: "Ramipril", tipo: "remedio" }, { nome: "Perindopril", tipo: "remedio" }, { nome: "Lisinopril", tipo: "remedio" }, { nome: "Fosinopril", tipo: "remedio" }, { nome: "Trandolapril", tipo: "remedio" }, { nome: "Benazepril", tipo: "remedio" }, { nome: "Quinapril", tipo: "remedio" }, { nome: "Moexipril", tipo: "remedio" },
    { nome: "Losartana", tipo: "remedio" }, { nome: "Valsartana", tipo: "remedio" }, { nome: "Candesartana", tipo: "remedio" }, { nome: "Telmisartana", tipo: "remedio" }, { nome: "Irbesartana", tipo: "remedio" }, { nome: "Olmesartana", tipo: "remedio" }, { nome: "Azilsartana", tipo: "remedio" }, { nome: "Aliscireno", tipo: "remedio" }, { nome: "Hidralazina", tipo: "remedio" }, { nome: "Minoxidil", tipo: "remedio" },
    { nome: "Clortalidona", tipo: "remedio" }, { nome: "Indapamida", tipo: "remedio" }, { nome: "Espironolactona", tipo: "remedio" }, { nome: "Eplerenona", tipo: "remedio" }, { nome: "Torsemida", tipo: "remedio" }, { nome: "Bumetanida", tipo: "remedio" }, { nome: "Furosemida", tipo: "remedio" }, { nome: "Amilorida", tipo: "remedio" }, { nome: "Triamtereno", tipo: "remedio" }, { nome: "Metildopa", tipo: "remedio" },
    { nome: "Groudon", tipo: "pokemon" }, { nome: "Rayquaza", tipo: "pokemon" }, { nome: "Jirachi", tipo: "pokemon" }, { nome: "Deoxys", tipo: "pokemon" }, { nome: "Torterra", tipo: "pokemon" }, { nome: "Infernape", tipo: "pokemon" }, { nome: "Empoleon", tipo: "pokemon" }, { nome: "Staraptor", tipo: "pokemon" }, { nome: "Bibarel", tipo: "pokemon" }, { nome: "Kricketune", tipo: "pokemon" },
    { nome: "Luxray ", tipo: "pokemon" }, { nome: "Roserade ", tipo: "pokemon" }, { nome: "Rampardos ", tipo: "pokemon" }, { nome: "Bastiodon ", tipo: "pokemon" }, { nome: "Wormadam ", tipo: "pokemon" }, { nome: "Mothim ", tipo: "pokemon" }, { nome: "Vespiquen ", tipo: "pokemon" }, { nome: "Pachirisu ", tipo: "pokemon" }, { nome: "Floatzel ", tipo: "pokemon" }, { nome: "Cherrim ", tipo: "pokemon" },
    { nome: "Gastrodon", tipo: "pokemon" }, { nome: "Ambipom", tipo: "pokemon" }, { nome: "Drifblim", tipo: "pokemon" }, { nome: "Lopunny", tipo: "pokemon" }, { nome: "Mismagius", tipo: "pokemon" }, { nome: "Honchkrow", tipo: "pokemon" }, { nome: "Purugly", tipo: "pokemon" }, { nome: "Skuntank", tipo: "pokemon" }, { nome: "Bronzong", tipo: "pokemon" }, { nome: "Chatot", tipo: "pokemon" },
    { nome: "Spiritomb", tipo: "pokemon" }, { nome: "Garchomp", tipo: "pokemon" }, { nome: "Lucario", tipo: "pokemon" }, { nome: "Hippowdon", tipo: "pokemon" }, { nome: "Drapion", tipo: "pokemon" }, { nome: "Toxicroak", tipo: "pokemon" }, { nome: "Carnivine", tipo: "pokemon" }, { nome: "Lumineon", tipo: "pokemon" }, { nome: "Abomasnow", tipo: "pokemon" }, { nome: "Weavile", tipo: "pokemon" },
    { nome: "Magnezone", tipo: "pokemon" }, { nome: "Lickilicky", tipo: "pokemon" }, { nome: "Rhyperior", tipo: "pokemon" }, { nome: "Tangrowth", tipo: "pokemon" }, { nome: "Electivire", tipo: "pokemon" }, { nome: "Magmortar", tipo: "pokemon" }, { nome: "Togekiss", tipo: "pokemon" }, { nome: "Yanmega", tipo: "pokemon" }, { nome: "Leafeon", tipo: "pokemon" }, { nome: "Glaceon", tipo: "pokemon" },
    { nome: "Gliscor", tipo: "pokemon" }, { nome: "Mamoswine", tipo: "pokemon" }, { nome: "Porygon-Z", tipo: "pokemon" }, { nome: "Gallade", tipo: "pokemon" }, { nome: "Probopass", tipo: "pokemon" }, { nome: "Dusknoir", tipo: "pokemon" }, { nome: "Froslass", tipo: "pokemon" }, { nome: "Rotom", tipo: "pokemon" }, { nome: "Uxie", tipo: "pokemon" }, { nome: "Mesprit", tipo: "pokemon" },
    { nome: "Azelf", tipo: "pokemon" }, { nome: "Dialga", tipo: "pokemon" }, { nome: "Palkia", tipo: "pokemon" }, { nome: "Heatran", tipo: "pokemon" }, { nome: "Regigigas", tipo: "pokemon" }, { nome: "Giratina", tipo: "pokemon" }, { nome: "Cresselia", tipo: "pokemon" }, { nome: "Phione", tipo: "pokemon" }, { nome: "Manaphy", _tipo_: "pokemon" }, { nome: "Darkrai", _tipo_: "pokemon" },
    { nome: "Shaymin", tipo: "pokemon" }, { nome: "Arceus", tipo: "pokemon" }, { nome: "Serperior", tipo: "pokemon" }, { nome: "Emboar", tipo: "pokemon" }, { nome: "Samurott", tipo: "pokemon" }, { nome: "Watchog", tipo: "pokemon" }, { nome: "Stoutland", tipo: "pokemon" }, { nome: "Liepard", tipo: "pokemon" }, { nome: "Simisear", tipo: "pokemon" }, { nome: "Simipour", tipo: "pokemon" },
    { nome: "Musharna", tipo: "pokemon" }, { nome: "Unfezant", tipo: "pokemon" }, { nome: "Zebstrika", tipo: "pokemon" }, { nome: "Gigalith", tipo: "pokemon" }, { nome: "Swoobat", tipo: "pokemon" }, { nome: "Excadrill", tipo: "pokemon" }, { nome: "Audino", tipo: "pokemon" }, { nome: "Conkeldurr", tipo: "pokemon" }, { nome: "Seismitoad", tipo: "pokemon" }, { nome: "Throh", tipo: "pokemon" },
    { nome: "Sawk", tipo: "pokemon" }, { nome: "Leavanny", tipo: "pokemon" }, { nome: "Scolipede", tipo: "pokemon" }, { nome: "Whimsicott", tipo: "pokemon" }, { nome: "Lilligant", tipo: "pokemon" }, { nome: "Basculin", tipo: "pokemon" }, { nome: "Krookodile", tipo: "pokemon" }, { nome: "Darmanitan", tipo: "pokemon" }, { nome: "Maractus", tipo: "pokemon" }, { nome: "Crustle", tipo: "pokemon" },
    { nome: "Scrafty", tipo: "pokemon" }, { nome: "Sigilyph", tipo: "pokemon" }, { nome: "Cofagrigus", tipo: "pokemon" }, { nome: "Carracosta", tipo: "pokemon" }, { nome: "Archeops", tipo: "pokemon" }, { nome: "Garbodor", tipo: "pokemon" }, { nome: "Zoroark", tipo: "pokemon" }, { nome: "Cinccino", tipo: "pokemon" }, { nome: "Gothitelle", tipo: "pokemon" }, { nome: "Reuniclus", tipo: "pokemon" },
    { nome: "Swanna ", tipo: "pokemon" }, { nome: "Vanilluxe ", tipo: "pokemon" }, { nome: "Sawsbuck ", tipo: "pokemon" }, { nome: "Emolga ", tipo: "pokemon" }, { nome: "Escavalier ", tipo: "pokemon" }, { nome: "Amoonguss ", tipo: "pokemon" }, { nome: "Jellicent ", tipo: "pokemon" }, { nome: "Galvantula ", tipo: "pokemon" }, { nome: "Ferrothorn ", tipo: "pokemon" }, { nome: "Klinklang ", tipo: "pokemon" },
    { nome: "Sinvastatina", tipo: "remedio" }, { nome: "Atorvastatina", tipo: "remedio" }, { nome: "Rosuvastatina", tipo: "remedio" }, { nome: "Pravastatina", tipo: "remedio" }, { nome: "Fluvastatina", tipo: "remedio" }, { nome: "Pitavastatina", tipo: "remedio" }, { nome: "Lovastatina", tipo: "remedio" }, { nome: "Ezetimiba", tipo: "remedio" }, { nome: "Fenofibrato", tipo: "remedio" }, { nome: "Bezafibrato", tipo: "remedio" },
    { nome: "Ciprofibrato", tipo: "remedio" }, { nome: "Gemfibrozil", tipo: "remedio" }, { nome: "Colesevelam", tipo: "remedio" }, { nome: "Colestipol", tipo: "remedio" }, { nome: "Niacina", tipo: "remedio" }, { nome: "Alirocumabe", tipo: "remedio" }, { nome: "Evolocumabe", tipo: "remedio" }, { nome: "Inclisirana", tipo: "remedio" }, { nome: "Sitagliptina", tipo: "remedio" }, { nome: "Saxagliptina", tipo: "remedio" },
    { nome: "Linagliptina", tipo: "remedio" }, { nome: "Vildagliptina", tipo: "remedio" }, { nome: "Alogliptina", tipo: "remedio" }, { nome: "Empagliflozina", tipo: "remedio" }, { nome: "Dapagliflozina", tipo: "remedio" }, { nome: "Canagliflozina", tipo: "remedio" }, { nome: "Ertugliflozina", tipo: "remedio" }, { nome: "Pioglitazona", tipo: "remedio" }, { nome: "Rosiglitazona", tipo: "remedio" }, { nome: "Acarbose", tipo: "remedio" },
    { nome: "Miglitol", tipo: "remedio" }, { nome: "Repaglinida", tipo: "remedio" }, { nome: "Nateglinida", tipo: "remedio" }, { nome: "Liraglutida", tipo: "remedio" }, { nome: "Semaglutida", tipo: "remedio" }, { nome: "Dulaglutida", tipo: "remedio" }, { nome: "Exenatida", tipo: "remedio" }, { nome: "Tirzepatida", tipo: "remedio" }, { nome: "Pramlintida", tipo: "remedio" }, { nome: "Metformina", tipo: "remedio" },
    { nome: "Eelektross ", tipo: "pokemon" }, { nome: "Beheeyem ", tipo: "pokemon" }, { nome: "Chandelure ", tipo: "pokemon" }, { nome: "Haxorus ", tipo: "pokemon" }, { nome: "Beartic ", tipo: "pokemon" }, { nome: "Cryogonal ", tipo: "pokemon" }, { nome: "Accelgor ", tipo: "pokemon" }, { nome: "Stunfisk ", tipo: "pokemon" }, { nome: "Mienshao ", tipo: "pokemon" }, { nome: "Druddigon ", tipo: "pokemon" },
    { nome: "Golurk", tipo: "pokemon" }, { nome: "Bisharp", tipo: "pokemon" }, { nome: "Bouffalant", tipo: "pokemon" }, { nome: "Braviary", tipo: "pokemon" }, { nome: "Mandibuzz", tipo: "pokemon" }, { nome: "Heatmor", tipo: "pokemon" }, { nome: "Durant", tipo: "pokemon" }, { nome: "Hydreigon", tipo: "pokemon" }, { nome: "Volcarona", tipo: "pokemon" }, { nome: "Cobalion", tipo: "pokemon" },
    { nome: "Terrakion", tipo: "pokemon" }, { nome: "Virizion", tipo: "pokemon" }, { nome: "Tornadus", tipo: "pokemon" }, { nome: "Thundurus", tipo: "pokemon" }, { nome: "Landorus", tipo: "pokemon" }, { nome: "Reshiram", tipo: "pokemon" }, { nome: "Zekrom", tipo: "pokemon" }, { nome: "Kyurem", tipo: "pokemon" }, { nome: "Keldeo", tipo: "pokemon" }, { nome: "Meloetta", tipo: "pokemon" },
    { nome: "Genesect", tipo: "pokemon" }, { nome: "Chesnaught", tipo: "pokemon" }, { nome: "Delphox", tipo: "pokemon" }, { nome: "Greninja", tipo: "pokemon" }, { nome: "Diggersby", tipo: "pokemon" }, { nome: "Talonflame", tipo: "pokemon" }, { nome: "Vivillon ", tipo: "pokemon" }, { nome: "Pyroar", tipo: "pokemon" }, { nome: "Florges", tipo: "pokemon" }, { nome: "Gogoat", tipo: "pokemon" },
    { nome: "Pangoro", tipo: "pokemon" }, { nome: "Furfrou", tipo: "pokemon" }, { nome: "Meowstic", tipo: "pokemon" }, { nome: "Aegislash", tipo: "pokemon" }, { nome: "Aromatisse", tipo: "pokemon" }, { nome: "Slurpuff", tipo: "pokemon" }, { nome: "Malamar", tipo: "pokemon" }, { nome: "Barbaracle", tipo: "pokemon" }, { nome: "Dragalge", tipo: "pokemon" }, { nome: "Clawitzer", tipo: "pokemon" },
    { nome: "Heliolisk", tipo: "pokemon" }, { nome: "Tyrantrum", tipo: "pokemon" }, { nome: "Aurorus", tipo: "pokemon" }, { nome: "Sylveon", tipo: "pokemon" }, { nome: "Hawlucha", tipo: "pokemon" }, { nome: "Dedenne", tipo: "pokemon" }, { nome: "Carbink", tipo: "pokemon" }, { nome: "Goodra", tipo: "pokemon" }, { nome: "Klefki", tipo: "pokemon" }, { nome: "Trevenant", tipo: "pokemon" },
    { nome: "Gourgeist ", tipo: "pokemon" }, { nome: "Avalugg ", tipo: "pokemon" }, { nome: "Noivern ", tipo: "pokemon" }, { nome: "Xerneas ", tipo: "pokemon" }, { nome: "Yveltal ", tipo: "pokemon" }, { nome: "Zygarde ", tipo: "pokemon" }, { nome: "Diancie ", tipo: "pokemon" }, { nome: "Hoopa ", tipo: "pokemon" }, { nome: "Volcanion ", tipo: "pokemon" },
    { nome: "Decidueye", tipo: "pokemon" }, { nome: "Incineroar", tipo: "pokemon" }, { nome: "Primarina", tipo: "pokemon" }, { nome: "Toucannon", tipo: "pokemon" }, { nome: "Gumshoos", tipo: "pokemon" }, { nome: "Vikavolt", tipo: "pokemon" }, { nome: "Crabominable", tipo: "pokemon" }, { nome: "Oricorio", tipo: "pokemon" }, { nome: "Lycanroc", tipo: "pokemon" }, { nome: "Toxapex", tipo: "pokemon" }, { nome: "Mudsdale ", tipo: "pokemon" },
    { nome: "Araquanid", tipo: "pokemon" }, { nome: "Lurantis", tipo: "pokemon" }, { nome: "Salazzle", tipo: "pokemon" }, { nome: "Drampa", tipo: "pokemon" }, { nome: "Turtonator", tipo: "pokemon" }, { nome: "Togedemaru", tipo: "pokemon" }, { nome: "Mimikyu", tipo: "pokemon" }, { nome: "Bruxish", tipo: "pokemon" }, { nome: "Drampa", tipo: "pokemon" },
    { nome: "Azitromicina", tipo: "remedio" }, { nome: "Claritromicina", tipo: "remedio" }, { nome: "Roxitromicina", tipo: "remedio" }, { nome: "Eritromicina", tipo: "remedio" }, { nome: "Telitromicina", tipo: "remedio" }, { nome: "Fidaxomicina", tipo: "remedio" }, { nome: "Doxiciclina", tipo: "remedio" }, { nome: "Minociclina", tipo: "remedio" }, { nome: "Tigeciclina", tipo: "remedio" }, { nome: "Omadaciclina", tipo: "remedio" },
    { nome: "Lefamulina", tipo: "remedio" }, { nome: "Linezolida", tipo: "remedio" }, { nome: "Tedizolida", tipo: "remedio" }, { nome: "Daptomicina", tipo: "remedio" }, { nome: "Dalbavancina", tipo: "remedio" }, { nome: "Oritavancina", tipo: "remedio" }, { nome: "Telavancina", tipo: "remedio" }, { nome: "Vancomicina", tipo: "remedio" }, { nome: "Teicoplanina", tipo: "remedio" }, { nome: "Rifabutina", tipo: "remedio" },
    { nome: "Rifapentina", tipo: "remedio" }, { nome: "Rifamicina", tipo: "remedio" }, { nome: "Clofazimina", tipo: "remedio" }, { nome: "Bedaquilina", tipo: "remedio" }, { nome: "Delamanida", tipo: "remedio" }, { nome: "Pretomanida", tipo: "remedio" }, { nome: "Isoniazida", tipo: "remedio" }, { nome: "Pirazinamida", tipo: "remedio" }, { nome: "Etambutol", tipo: "remedio" }, { nome: "Capreomicina", tipo: "remedio" },
    { nome: "Oseltamivir", tipo: "remedio" }, { nome: "Zanamivir", tipo: "remedio" }, { nome: "Peramivir", tipo: "remedio" }, { nome: "Baloxavir", tipo: "remedio" }, { nome: "Favipiravir", tipo: "remedio" }, { nome: "Remdesivir", tipo: "remedio" }, { nome: "Molnupiravir", tipo: "remedio" }, { nome: "Ribavirina", tipo: "remedio" }, { nome: "Sofosbuvir", tipo: "remedio" }, { nome: "Ledipasvir", tipo: "remedio" },
    { nome: "Dhelmise ", tipo: "pokemon" }, { nome: "Kommo-o", tipo: "pokemon" }, { nome: "Tapu Koko", tipo: "pokemon" }, { nome: "Tapu Lele", tipo: "pokemon" }, { nome: "Tapu Bulu", tipo: "pokemon" }, { nome: "Tapu Fini", tipo: "pokemon" }, { nome: "Cosmoem", tipo: "pokemon" }, { nome: "Solgaleo", tipo: "pokemon" }, { nome: "Lunala", tipo: "pokemon" }, { nome: "Nihilego", tipo: "pokemon" },
    { nome: "Buzzwole ", tipo: "pokemon" }, { nome: "Pheromosa ", tipo: "pokemon" }, { nome: "Xurkitree ", tipo: "pokemon" }, { nome: "Celesteela ", tipo: "pokemon" }, { nome: "Kartana ", tipo: "pokemon" }, { nome: "Guzzlord ", tipo: "pokemon" }, { nome: "Necrozma ", tipo: "pokemon" }, { nome: "Magearna ", tipo: "pokemon" }, { nome: "Marshadow ", tipo: "pokemon" }, { nome: "Zeraora ", tipo: "pokemon" },
    { nome: "Melmetal", tipo: "pokemon" }, { nome: "Rillaboom", tipo: "pokemon" }, { nome: "Cinderace", tipo: "pokemon" }, { nome: "Inteleon", tipo: "pokemon" }, { nome: "Corviknight", tipo: "pokemon" }, { nome: "Orbeetle", tipo: "pokemon" }, { nome: "Thievul", tipo: "pokemon" }, { nome: "Eldegoss", tipo: "pokemon" }, { nome: "Dubwool", tipo: "pokemon" }, { nome: "Coalossal", tipo: "pokemon" },
    { nome: "Flapple ", tipo: "pokemon" }, { nome: "Appletun ", tipo: "pokemon" }, { nome: "Sandaconda ", tipo: "pokemon" }, { nome: "Cramorant ", tipo: "pokemon" }, { nome: "Toxtricity ", tipo: "pokemon" }, { nome: "Centiskorch ", tipo: "pokemon" }, { nome: "Hatterene ", tipo: "pokemon" }, { nome: "Grimmsnarl ", tipo: "pokemon" }, { nome: "Alcremie ", tipo: "pokemon" }, { nome: "Copperajah ", tipo: "pokemon" },
    { nome: "Dragapult", tipo: "pokemon" }, { nome: "Zacian", tipo: "pokemon" }, { nome: "Zamazenta", tipo: "pokemon" }, { nome: "Eternatus", tipo: "pokemon" }, { nome: "Kubfu", tipo: "pokemon" }, { nome: "Urshifu", tipo: "pokemon" }, { nome: "Zarude", tipo: "pokemon" }, { nome: "Regieleki", tipo: "pokemon" }, { nome: "Regidrago", tipo: "pokemon" }, { nome: "Glastrier", tipo: "pokemon" },
    { nome: "Spectrier ", tipo: "pokemon" }, { nome: "Calyrex", tipo: "pokemon" }, { nome: "Wyrdeer", tipo: "pokemon" }, { nome: "Kleavor", tipo: "pokemon" }, { nome: "Ursaluna", tipo: "pokemon" }, { nome: "Basculegion", tipo: "pokemon" }, { nome: "Sneasler", tipo: "pokemon" }, { nome: "Overqwil", tipo: "pokemon" }, { nome: "Enamorus", tipo: "pokemon" },
    { nome: "Great Tusk ", tipo: "pokemon" }, { nome: "Iron Treads ", tipo: "pokemon" }, { nome: "Iron Bundle ", tipo: "pokemon" }, { nome: "Iron Hands ", tipo: "pokemon" }, { nome: "Iron Jugulis ", tipo: "pokemon" }, { nome: "Iron Moth ", tipo: "pokemon" }, { nome: "Iron Thorns ", tipo: "pokemon" }, { nome: "Roaring Moon ", tipo: "pokemon" }, { nome: "Walking Wake ", tipo: "pokemon" }, { nome: "Iron Leaves ", tipo: "pokemon" },
    { nome: "Velpatasvir", tipo: "remedio" }, { nome: "Grazoprevir", tipo: "remedio" }, { nome: "Elbasvir", tipo: "remedio" }, { nome: "Glecaprevir", tipo: "remedio" }, { nome: "Pibrentasvir", tipo: "remedio" }, { nome: "Daclatasvir", tipo: "remedio" }, { nome: "Simeprevir", tipo: "remedio" }, { nome: "Boceprevir", tipo: "remedio" }, { nome: "Telaprevir", tipo: "remedio" }, { nome: "Entecavir", tipo: "remedio" },
    { nome: "Dupilumabe", tipo: "remedio" }, { nome: "Omalizumabe", tipo: "remedio" }, { nome: "Benralizumabe", tipo: "remedio" }, { nome: "Mepolizumabe", tipo: "remedio" }, { nome: "Reslizumabe", tipo: "remedio" }, { nome: "Tezepelumabe", tipo: "remedio" }, { nome: "Eculizumabe", tipo: "remedio" }, { nome: "Ravulizumabe", tipo: "remedio" }, { nome: "Natalizumabe", tipo: "remedio" }, { nome: "Alemtuzumabe", tipo: "remedio" },
    { nome: "Rituximabe", tipo: "remedio" }, { nome: "Obinutuzumabe", tipo: "remedio" }, { nome: "Ofatumumabe", tipo: "remedio" }, { nome: "Trastuzumabe", tipo: "remedio" }, { nome: "Pertuzumabe", tipo: "remedio" }, { nome: "Bevacizumabe", tipo: "remedio" }, { nome: "Cetuximabe", tipo: "remedio" }, { nome: "Panitumumabe", tipo: "remedio" }, { nome: "Nivolumabe", tipo: "remedio" }, { nome: "Pembrolizumabe", tipo: "remedio" },
    { nome: "Axitinibe", tipo: "remedio" }, { nome: "Sunitinibe", tipo: "remedio" }, { nome: "Sorafenibe", tipo: "remedio" }, { nome: "Regorafenibe", tipo: "remedio" }, { nome: "Lenvatinibe", tipo: "remedio" }, { nome: "Cabozantinibe", tipo: "remedio" }, { nome: "Pazopanibe", tipo: "remedio" }, { nome: "Vemurafenibe", tipo: "remedio" }, { nome: "Dabrafenibe", tipo: "remedio" }, { nome: "Trametinibe", tipo: "remedio" },
    { nome: "Everolimo", tipo: "remedio" }, { nome: "Sirolimo", tipo: "remedio" }, { nome: "Temsirolimo", tipo: "remedio" }, { nome: "Alpelisibe", tipo: "remedio" }, { nome: "Idelalisibe", tipo: "remedio" }, { nome: "Venetoclax", tipo: "remedio" }, { nome: "Ibrutinibe", tipo: "remedio" }, { nome: "Acalabrutinibe", tipo: "remedio" }, { nome: "Zanubrutinibe", tipo: "remedio" }, { nome: "Midostaurina", tipo: "remedio" },
    { nome: "Leflunomida", tipo: "remedio" }, { nome: "Teriflunomida", tipo: "remedio" }, { nome: "Apremilaste", tipo: "remedio" }, { nome: "Dimetilfumarato", tipo: "remedio" }, { nome: "Fingolimode", tipo: "remedio" }, { nome: "Siponimode", tipo: "remedio" }, { nome: "Ozanimode", tipo: "remedio" }, { nome: "Ponesimode", tipo: "remedio" }, { nome: "Cladribina", tipo: "remedio" }, { nome: "Mitoxantrona", tipo: "remedio" },
    { nome: "Paclitaxel", tipo: "remedio" }, { nome: "Docetaxel", tipo: "remedio" }, { nome: "Cabazitaxel", tipo: "remedio" }, { nome: "Etoposídeo", tipo: "remedio" }, { nome: "Bleomicina", tipo: "remedio" }, { nome: "Doxorrubicina", tipo: "remedio" }, { nome: "Epirrubicina", tipo: "remedio" }, { nome: "Cisplatina", tipo: "remedio" }, { nome: "Carboplatina", tipo: "remedio" }, { nome: "Oxaliplatina", tipo: "remedio" },
    { nome: "Sildenafil", tipo: "remedio" }, { nome: "Tadalafil", tipo: "remedio" }, { nome: "Vardenafil", tipo: "remedio" }, { nome: "Avanafil", tipo: "remedio" }, { nome: "Mirabegrona", tipo: "remedio" }, { nome: "Solifenacina", tipo: "remedio" }, { nome: "Tolterodina", tipo: "remedio" }, { nome: "Darifenacina", tipo: "remedio" }, { nome: "Fesoterodina", tipo: "remedio" }, { nome: "Tamsulosina", tipo: "remedio" },
    { nome: "Finasterida", tipo: "remedio" }, { nome: "Dutasterida", tipo: "remedio" }, { nome: "Clopidogrel", tipo: "remedio" }, { nome: "Ticagrelor", tipo: "remedio" }, { nome: "Prasugrel", tipo: "remedio" }, { nome: "Apixabana", tipo: "remedio" }, { nome: "Rivaroxabana", tipo: "remedio" }, { nome: "Edoxabana", tipo: "remedio" }, { nome: "Dabigatrana", tipo: "remedio" }, { nome: "Fondaparinux", tipo: "remedio" },
    { nome: "Montelucaste", tipo: "remedio" }, { nome: "Zafirlucaste", tipo: "remedio" }, { nome: "Roflumilaste", tipo: "remedio" }, { nome: "Pimecrolimo", tipo: "remedio" }, { nome: "Calcipotriol", tipo: "remedio" }, { nome: "Bexaroteno", tipo: "remedio" }, { nome: "Isotretinoína", tipo: "remedio" }, { nome: "Adapaleno", tipo: "remedio" }, { nome: "Verteporfina", tipo: "remedio" }, { nome: "Ranibizumabe", tipo: "remedio" },
    { nome: "Acetazolamida", tipo: "remedio" }, { nome: "Allopurinol", tipo: "remedio" }, { nome: "Amiodarona", tipo: "remedio" }, { nome: "Anastrozol", tipo: "remedio" }, { nome: "Apremilaste", tipo: "remedio" }, { nome: "Atazanavir", tipo: "remedio" }, { nome: "Bicalutamida", tipo: "remedio" },
    { nome: "Bosentan", tipo: "remedio" }, { nome: "Brivaracetam", tipo: "remedio" }, { nome: "Bromocriptina", tipo: "remedio" }, { nome: "Buspirona", tipo: "remedio" }, { nome: "Calcitonina", tipo: "remedio" }, { nome: "Canakinumabe", tipo: "remedio" }, { nome: "Capecitabina", tipo: "remedio" }, { nome: "Ceftarolina", tipo: "remedio" }, { nome: "Cenobamato", tipo: "remedio" }, { nome: "Cerliponase", tipo: "remedio" },
    { nome: "Ciclosporina", tipo: "remedio" }, { nome: "Cisatracúrio", tipo: "remedio" }, { nome: "Colchicina", tipo: "remedio" }, { nome: "Crizotinibe", tipo: "remedio" }, { nome: "Dalfampridina", tipo: "remedio" }, { nome: "Darunavir", tipo: "remedio" }, { nome: "Deflazacorte", tipo: "remedio" }, { nome: "Desloratadina", tipo: "remedio" }, { nome: "Desvenlafaxina", tipo: "remedio" }, { nome: "Dexmedetomidina", tipo: "remedio" }, { nome: "Diazoxide", tipo: "remedio" }, { nome: "Dofetilida", tipo: "remedio" },
    { nome: "Dronedarona", tipo: "remedio" }, { nome: "Edaravona", tipo: "remedio" }, { nome: "Eltrombopague", tipo: "remedio" }, { nome: "Emicizumabe", tipo: "remedio" }, { nome: "Eplontersen", tipo: "remedio" }, { nome: "Erdafitinibe", tipo: "remedio" }, { nome: "Erlotinibe", tipo: "remedio" },, { nome: "Etanercepte", tipo: "remedio" }, { nome: "Etravirina", tipo: "remedio" }, { nome: "Felbamato", tipo: "remedio" }, { nome: "Fidaxomicina", tipo: "remedio" }, { nome: "Filgotinibe", tipo: "remedio" }, { nome: "Flibanserina", tipo: "remedio" }, { nome: "Fluconazol", tipo: "remedio" },
    { nome: "Fostamatinibe", tipo: "remedio" },
    { nome: "Ganciclovir", tipo: "remedio" },
    { nome: "Gefitinibe", tipo: "remedio" },
    { nome: "Givosirana", tipo: "remedio" },
    { nome: "Glimepirida", tipo: "remedio" },
    { nome: "Guselkumabe", tipo: "remedio" },
    { nome: "Hydroxyureia", tipo: "remedio" },
    { nome: "Icatibanto", tipo: "remedio" },
    { nome: "Ifosfamida", tipo: "remedio" },
    { nome: "Imatinibe", tipo: "remedio" },
    { nome: "Indometacina", tipo: "remedio" },
    { nome: "Irinotecano", tipo: "remedio" },
    { nome: "Ivabradina", tipo: "remedio" },
    { nome: "Ixekizumabe", tipo: "remedio" },
    { nome: "Ketoconazol", tipo: "remedio" },
    { nome: "Lacosamida", tipo: "remedio" },

    { nome: "Lanreotida", tipo: "remedio" },
    { nome: "Lapatinibe", tipo: "remedio" },
    { nome: "Lefamulin", tipo: "remedio" },
    { nome: "Lenalidomida", tipo: "remedio" },
    { nome: "Letrozol", tipo: "remedio" },
    { nome: "Linaclotida", tipo: "remedio" },
    { nome: "Lomitapida", tipo: "remedio" },
    { nome: "Lumacaftor", tipo: "remedio" },
    { nome: "Macitentana", tipo: "remedio" },
    { nome: "Maraviroque", tipo: "remedio" },

    { nome: "Mefloquina", tipo: "remedio" },
    { nome: "Melatonina", tipo: "remedio" },
    { nome: "Methotrexato", tipo: "remedio" },
    { nome: "Milrinona", tipo: "remedio" },
    { nome: "Mirvetuximabe", tipo: "remedio" },
    { nome: "Mizoribina", tipo: "remedio" },
    { nome: "Nabumetona", tipo: "remedio" },
    { nome: "Naloxegol", tipo: "remedio" },
    { nome: "Nintedanibe", tipo: "remedio" },
    { nome: "Nitazoxanida", tipo: "remedio" },

    { nome: "Obeticholato", tipo: "remedio" },
    { nome: "Ocrelizumabe", tipo: "remedio" },
    { nome: "Olopatadina", tipo: "remedio" },
    { nome: "Osimertinibe", tipo: "remedio" },
    { nome: "Oxcarbazepina", tipo: "remedio" },
    { nome: "Palbociclibe", tipo: "remedio" },
    { nome: "Patiromer", tipo: "remedio" },
    { nome: "Pegfilgrastim", tipo: "remedio" },
    { nome: "Perampanel", tipo: "remedio" },
    { nome: "Plerixafor", tipo: "remedio" },

    { nome: "Ponatinibe", tipo: "remedio" },
    { nome: "Posaconazol", tipo: "remedio" },
    { nome: "Ramelteona", tipo: "remedio" },
    { nome: "Ranolazina", tipo: "remedio" },
    { nome: "Riluzol", tipo: "remedio" },
    { nome: "Ruxolitinibe", tipo: "remedio" },
    { nome: "Safinamida", tipo: "remedio" },
    { nome: "Sarilumabe", tipo: "remedio" },
    { nome: "Secuquinumabe", tipo: "remedio" },
    { nome: "Sertindol", tipo: "remedio" },

    { nome: "Siltuximabe", tipo: "remedio" },
    { nome: "SodiumOxybate", tipo: "remedio" },
    { nome: "Sunitinibe", tipo: "remedio" },
    { nome: "Tacrolimo", tipo: "remedio" },
    { nome: "Teduglutida", tipo: "remedio" },
    { nome: "Terlipressina", tipo: "remedio" },
    { nome: "Tolvaptana", tipo: "remedio" },
    { nome: "Trifluridina", tipo: "remedio" },
    { nome: "Umeclidinio", tipo: "remedio" },
    { nome: "Upadacitinibe", tipo: "remedio" },

    { nome: "Valganciclovir", tipo: "remedio" },
    { nome: "Vandetanibe", tipo: "remedio" },
    { nome: "Vareniclina", tipo: "remedio" },
    { nome: "Vedolizumabe", tipo: "remedio" },
    { nome: "Vericiguate", tipo: "remedio" },
    { nome: "Voriconazol", tipo: "remedio" },
    { nome: "Vortioxetina", tipo: "remedio" },
    { nome: "Ziconotida", tipo: "remedio" },
    { nome: "Zolmitriptana", tipo: "remedio" },
    { nome: "Zonisamida", tipo: "remedio" }
];




