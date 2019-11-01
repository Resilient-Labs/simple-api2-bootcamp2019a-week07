const pokemonInput = document.querySelector("#pokemonInput");
const submitPokemonButton = document.querySelector("#submitPokemon");
const normalImage = document.querySelector("#normalImage");
const shinyImage = document.querySelector("#shinyImage");
const effortSection = document.querySelector("#effortSection")

function searchPokemon() {

    const pokemonName = pokemonInput.value;
    let usedName = pokemonName.toLowerCase();
    if(pokemonName.toLowerCase() === "farfetch'd") {
        usedName = "farfetchd";
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(usedName)}`)
        .then(res => res.json())
        .then(response => {
            console.table(response);
            normalImage.src = response.sprites.front_default;
            shinyImage.src = response.sprites.front_shiny;
            effortSection.style.display = "flex";
            document.querySelector("#hpEv").textContent = response.stats[5].effort;
            document.querySelector("#atkEv").textContent = response.stats[4].effort;
            document.querySelector("#defEv").textContent = response.stats[3].effort;
            document.querySelector("#spAtkEv").textContent = response.stats[2].effort;
            document.querySelector("#spDefEv").textContent = response.stats[1].effort;
            document.querySelector("#speedEv").textContent = response.stats[0].effort;
            let speciesName = response.species.name;
            switch(speciesName){
                case "ho-oh":
                    speciesName = "Ho-Oh";
                    break;
                case "farfetchd":
                    speciesName = "Farfetch'd";
                    break;
                case "porygon-z":
                    speciesName = "Porygon-Z";
                    break;
                default:
                    speciesName = response.species.name.charAt(0).toUpperCase() + response.species.name.slice(1);
                    break;
            }
            document.querySelector("#pokemonName").textContent = speciesName;
        })
        .catch(err => {
            alert(`Sorry, the Pokémon ${pokemonName} was not found.`)
        });

    pokemonInput.value = "";

}

pokemonInput.addEventListener('keyup', event => {
    if(event.key === "Enter") {
        searchPokemon();
    }
});

submitPokemonButton.addEventListener('click', searchPokemon);
