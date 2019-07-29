document.querySelector('form').addEventListener('submit',function (e){
  e.preventDefault()
  let pokemonName = document.querySelector('input').value
  console.log(pokemonName)
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/?limit=964&offset=0`
  console.log(url)
  fetch(url)

  .then(res => res.json())
  .then(response => {
    console.log("response from fetch");
    console.log(response);
    document.querySelector('#result1').textContent = response.forms[0].name;
    document.querySelector('#result2').textContent = response.types[0].type.name;
    document.querySelector('#result3').textContent = response.abilities[0].ability.name;
    document.querySelector('#result4').textContent = response.moves[0].move.name;
    document.querySelector('#result5').textContent = response.stats[4].base_stat;
    document.querySelector('#result6').textContent = response.types[1].type.name;
    document.querySelector('.normal').src = response.sprites.front_default;
    document.querySelector('.shiny').src = response.sprites.front_shiny;
    document.querySelector('#result7').textContent = response.stats[3].base_stat;

  })
//^Not sure if it's the best practice, maybe a for loop can be used in order to repeatedly get different responses or be written in one line?
//notes
  .catch(err =>{
    console.log(`error ${err}`)
    alert("Sorry, there are no results for your search.")
  })
})
