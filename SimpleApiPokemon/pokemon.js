document.querySelector('button').addEventListener('click' , findPoke)

function findPoke(){
    const name = document.querySelector('input').value
    
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => {

        console.log(data)
        let abi = data.abilities[0].ability.name
        let typeone = data.types[0].type.name
        let name = data.name
        let photos = data.sprites.front_default
        document.querySelector('.abi').innerText = abi
        document.querySelector('.typeone').innerText = typeone
        document.querySelector('img').src = photos
        document.querySelector('.name').innerText = name
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}
