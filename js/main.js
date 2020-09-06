let userAnswer = document.getElementById('userAnswer'); //selects user input, p tag and form
let display = document.getElementById('joke');
let form = document.getElementById('form-input');

form.addEventListener("submit",(event) =>{
  event.preventDefault();
  fetch( `https://sv443.net/jokeapi/v2/joke/Programming?type=single`) //fetch call
   .then(response => response.json()) //parse json
   .then(data => {
     console.log(data.joke) //check to see joke in console
     document.querySelector('div').classList.remove("hide"); // remove class to show joke 
     document.getElementById("joke").textContent = data.joke; //display joke in p tag
   });
 });