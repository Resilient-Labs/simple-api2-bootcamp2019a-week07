const ul = document.querySelector("ul")

const button = document.querySelector("button")


button.addEventListener("click", () => {
  let input = document.querySelector("input").value

fetch(`https://api.openbrewerydb.org/breweries?by_city=${input}`)

    .then(res => res.json())
    .then(response => {
      for (let i = 0; i < response.length; i++) {
      let breweryInfo = response[i];
      let li = document.createElement('li');
      ul.appendChild(li);
      li.innerHTML = li.innerHTML + breweryInfo.name + " " + "Brewery Type:"+ " " + breweryInfo.brewery_type + " " + "Address:" + " " + breweryInfo.street
    }
    })

    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    })
  })

  button.addEventListener("click", () => {
  const li = document.querySelectorAll("LI");
  for(let i = 0; i < li.length; i++){
    ul.removeChild(li[i]);
  }
})
