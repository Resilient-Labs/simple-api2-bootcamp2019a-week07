document.querySelector("button").addEventListener("click", getCharacter)

function getCharacter(){
  let name = document.querySelector("input").value
  let url = `https://rickandmortyapi.com/api/character/?name=${name}`

  fetch(url)
    .then(res => res.json())
    .then(data =>{
      for(i=0; i< data.results.length; i++){
        console.log(data.results[i].name)
        document.querySelector(".searchResults").innerText += `${data.results[i].name}\n`
        document.querySelector(".searchResults").addEventListener("click", event =>{
          if(event.target.className === "searchResults"){
            // get help for This
            //let clickedName =
            // document.querySelector("h2").innerText = `${clickedName}`
          }
        })


      }

    })
}
