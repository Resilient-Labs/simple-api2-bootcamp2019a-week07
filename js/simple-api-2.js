// user is able to enter in a word
// user clicks a button
// user recieves information

// give value to my form
// use a event listener to create a button
// fire a function when button is pressed
// grab api key
// error code if incorrect

document.querySelector("form").addEventListener("submit", definition)

function definition(e){
  e.preventDefault()

  let word = document.querySelector("input").value
  console.log(definition)

  let apiKey = "dad65f4f-aca8-479e-aed3-749cadda22ac";

  fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${apiKey}`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
          console.log(response)
          document.querySelector("#defs").innerHTML = response[0].shortdef
      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });
}
