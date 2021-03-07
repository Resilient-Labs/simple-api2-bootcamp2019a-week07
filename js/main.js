document.querySelector("button").addEventListener("click", getCharacter)

function getCharacter(){
  let characterName = document.querySelector("input").value
  let names = document.querySelector(".names")
  let statuses = document.querySelector(".status")
  let images = document.querySelector(".images")
  let url = `https://rickandmortyapi.com/api/character/?name=${characterName}`

  fetch(url)
    .then(res => res.json())
    .then(data =>{
      for(i=0; i< data.results.length; i++){
        console.log(data)
        let listItem = document.createElement("li")
        let listItem2 = document.createElement("li")
        let listItem3 = document.createElement("img")
        names.appendChild(listItem)
        statuses.appendChild(listItem2)
        images.appendChild(listItem3)

        listItem.innerText = data.results[i].name
        listItem2.innerText = data.results[i].status
        listItem3.src = data.results[i].image
        // document.querySelector(".searchResults").innerText += `${data.results[i].name}\n`
        // document.querySelector(".searchResults").addEventListener("click", event =>{
        //
        // })


      }

    })
}
