const fetchPokemon = () => {
    const PokeName = document.getElementById("PokeName");
    let PokeInput = PokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${PokeInput}`;
    fetch(url).then((respuesta) => {
        if (respuesta.status != "200")
            console.log(respuesta)
        PokeI("./CharmanderSad.gif")
        return respuesta.json();
    }).then((data) => {
        console.log(data);
        let PokeImg = data.sprites.front_default;
        console.log(PokeImg);
        PokeI(PokeImg);
    })

}

//fetchPokemon();

const PokeI = (url) => {
    const PokeBall = document.getElementById("PokeBall");
    PokeBall.src = url;
}

//PokeI("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png")

