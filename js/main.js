// API used: https://www.brewerydb.com/developers Endpoint:https://www.brewerydb.com/developers/docs/endpoint/beer-random

const key = '5915e6f889470d4ad78221238c762ab4'



document.querySelector(`#btn`).addEventListener(`click`, (e) => { getDrink() })



function onClick(){

  const sec = document.querySelector(`#result`)

  if(sec.hasChildNodes() === true){ //removes all children elements from section
    
    while (sec.firstChild) {
      sec.removeChild(sec.lastChild);
    }

  }

  getDrink()
}

function getDrink(){   // fetch a random drink with the parameter abv which the user chooses

 const abv = document.querySelector('#abv-choice').value 
  
  fetch(`https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beer/random/?key=${key}&abv=${abv}&withIngredients=Y&withBreweries=Y`)
      .then(res => res.json()) 
      .then(response => {
        //console.table(response)
        drinkName = response.data.name
        drinkAbv = response.data.abv
        drinkBlob = response.data.style.description
        drinkBrew = response.data.breweries[0].name

        drinkLoc = [response.data.breweries[0].locations[0].streetAddress , response.data.breweries[0].locations[0].locality , response.data.breweries[0].locations[0].region , response.data.breweries[0].locations[0].postalCode , response.data.breweries[0].locations[0].phone , response.data.breweries[0].locations[0].website]

        formatDrink(drinkName,drinkAbv,drinkBlob,drinkBrew,drinkLoc)
      })

      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });

}

function formatDrink(drinkName,drinkAbv,drinkBlob,drinkBrew,drinkLoc){  // formats the response on the DOM
  document.querySelector(`section`).style.width =`50%`
  document.querySelector("#result").style.display = `block`
  document.querySelector(`#drink-name`).textContent = drinkName
  document.querySelector(`#abv-rating`).textContent = drinkAbv
  document.querySelector(`#description`).textContent = drinkBlob
  document.querySelector(`#brewery-name`).textContent = drinkBrew
  console.log(drinkLoc)
  for(let i = 0; i <= drinkLoc.length;i++){
    node = document.createElement(`span`)
    node.classList.add(`details`)
    node.style.display =`block`
    node.textContent = drinkLoc[i]
    document.querySelector(`#result`).appendChild(node)
    
  }


}