const pokemoncontainer = document.querySelector("#lista_pokemon");
let url;
// const pokemon_async = async() =>{
    for (let i = 1; i <= 20; i++) {
        url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        // const res = await fetch(url);
        // const data = await res.json();
        // console.log(data);
        fetch(url)
        .then((res) => res.json())
        .then((data) => mostrarPokemon(data));
    }
// }
function mostrarPokemon(pokemon){
    const section = document.createElement("section");
    section.classList.add("Container_cards");
    section.innerHTML = `
    <article class="card">
                <div class="Container_contenido">
                    <div class="contenido1">
                        <img class="img_poke" id="img_pokemon"
                            src="${pokemon.sprites.other['official-artwork'].front_default}" alt="">
                    </div>
                    <div class="contenido2">
                        <p id="id_poke">${pokemon.id}</p>
                        <h3 id="name_pokemon">${pokemon.name}</h3>
                    </div>
                </div>
            </article>
    `;
    pokemoncontainer.append(section);
}