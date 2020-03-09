// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit
// How to submit your code for review:
// Fork and clone this repo
// Create a new branch called answer
// Checkout answer branch
// Push to your fork
// Issue a pull request
// Your pull request description should contain the following:
// (1 to 5 no 3) I completed the challenge
// (1 to 5 no 3) I feel good about my code
// Anything specific on which you want feedback!

// Goal: Enable your user to enter a city + country and return the temperature in Fahrenheit
// How to submit your code for review:
// Fork and clone this repo
// Create a new branch called answer
// Checkout answer branch
// Push to your fork
// Issue a pull request
// Your pull request description should contain the following:
// (1 to 5 no 3) I completed the challenge
// (1 to 5 no 3) I feel good about my code
// Anything specific on which you want feedback!

let form = document.querySelector("form")
let button = document.getElementById("search");

form.addEventListener('submit', function(e) {
  e.preventDefault()
  let gender = document.getElementById("gender").value
  let person = document.querySelector("#person")
  fetch(`https://uinames.com/api/?gender=${gender}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      person.innerHTML = `Hi! My name is ${response.name} ${response.surname}. I am a ${response.gender} and I live in ${response.region}`
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    });
})
