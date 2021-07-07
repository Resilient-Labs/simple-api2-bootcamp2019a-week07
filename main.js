let btn = document.querySelector("#button")
let ul = document.querySelector("#quoteSpace")

// let result = document.querySelector("#quoteSpace")

btn.addEventListener("click", () => {

  fetch(`https://api.chucknorris.io/jokes/random`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        let item = (response.value)
        let textNode = document.createTextNode(item)
        let ul = document.querySelector("#theQuoteList")
        let li = document.createElement("li")
         li.appendChild(textNode)
         ul.appendChild(li)
      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });

})
