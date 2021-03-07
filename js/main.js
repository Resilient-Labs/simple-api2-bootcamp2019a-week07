
document.querySelector('button').addEventListener('click', getPokemon)

document.querySelector('input').addEventListener('keypress', runGetPokemon)

function runGetPokemon(e){
    if(e.keyCode === 13){
        e.preventDefault()
        getPokemon()
    }
    
}


function getPokemon() {

    let query = document.querySelector('.inputSearch').value

    let url = `https://pokeapi.co/api/v2/pokemon/${query}`

    fetch (url)

        .then(response => response.json())

        .then(data => {

            clear();

            console.log(data);
            console.log(data.abilities);

            document.querySelector('.h2Name').innerText = data.species.name

            document.querySelector('#imgPhoto1').src = data.sprites.front_default

            document.querySelector('#imgPhoto2').src = data.sprites.back_default

            for(abilities of data.abilities) {

                document.querySelector('.h3Abilities').innerText = 'Abilities:'

                let ability = abilities.ability.name
                console.log(abilities.ability.name);

                let parent = document.querySelector('.secAbilities')

                let child = document.createElement('h3')

                child.classList.add('abilities');

                child.innerText = ability

                parent.append(child);
            }

        })
   

        .catch(err => {
            console.log(`error ${err}`)
        });



}

function clear() {


        let parent = document.querySelector('.secAbilities')

        document.querySelectorAll(".abilities").forEach(e => parent.removeChild(e));

}



