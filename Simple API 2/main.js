

document.querySelector('button').addEventListener('click', function () {
fetch(`https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=racist,sexist`) //Put those flags bc I don't play like that
  .then(response => response.json())
  .then(data => {
      if (data.type == "single") {
        document.getElementById('jokeAppear').innerHTML = data.joke
        document.getElementById('jokeAppear2').innerHTML = ""
      } else if (data.type == "twopart"){ //so it'll show up how we want it to
        document.querySelector('#jokeAppear').innerHTML = data.setup
        document.querySelector('#jokeAppear2').innerHTML = data.delivery
      }
      console.log(data); //Just so it shows in the console.

    }) //closes the .then for the data

}) //{closes the function and ( closes the parameters in query selector
