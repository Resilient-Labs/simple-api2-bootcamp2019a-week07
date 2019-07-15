document.querySelector("button").addEventListener("click", () => {
  let location = document.querySelector("input").value

fetch(`https://api.openbrewerydb.org/breweries?by_city=${location}&sort=type,-name&per_page=30`)
  .then(res => res.json())
  .then(response => {
   console.log(response)

   // refresh the page everytime user inputs new city
   document.querySelector(".breweryContainer").innerHTML = ""

   let breweries = response
    breweries.forEach((brewery,i) => {
      console.log(brewery)

      var breweryDiv = document.createElement("div")

      // creating a placeholder for the breweries
      var breweryName = document.createElement("span")
      breweryName.innerHTML = "Brewery Name: " + brewery.name //`Name:${brewery.name}`
      breweryDiv.appendChild(breweryName)

      //div for list of breweries and a div for breweries itself
      document.querySelector(".breweryContainer").appendChild(breweryDiv)
    })
  });
})
