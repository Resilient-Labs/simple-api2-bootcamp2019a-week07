
btn = document.querySelector("button")
btn.addEventListener("click", ()=>{
let pokemon = document.querySelector("#name").value.toString()



const result = document.querySelector("p")





fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
  .then(res => res.json())
  .then(response => {
    console.log(response)


    // for the ability name response.abilities[0].ability.name
    // name response.species.name
    for(let i=0;i<=10;i++){
      let move=response.moves[i].move.name
      let element = document.createElement('li')
      let createTextMove=document.createTextNode(move)
      result.appendChild(element)
      element.appendChild(createTextMove)
    }
    // move response.moves[i].move.name


  })
  .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
  });
})
