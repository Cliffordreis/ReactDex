const gerarPokemon = async () => {
  const idAleatorio = Math.floor(Math.random() * 1010) + 1;

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${idAleatorio}`
  );
  const data = await response.json();

  const tipoPrincipal = data.types[0].type.name;

  setPokemonAtual({
    nome: data.name,
    imagem: data.sprites.other["official-artwork"].front_default
  });

  setTipoCorreto(tipoPrincipal);

  gerarAlternativas(tipoPrincipal);
};
