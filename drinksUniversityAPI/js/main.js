let userAnswer = prompt("In the mood for a drink? Pick one.")

fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userAnswer}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {

      let topHeading = document.createElement('h1')
      topHeading.innerText = userAnswer;
      document.querySelector('#drinkInfo').appendChild(topHeading);
      console.log(response);

      response.drinks.forEach((el) => {
        let drinkInstrux = document.createElement('p');
        let drinkPix = document.createElement('img');
        drinkInstrux.innerText = el.strInstructions;
        drinkPix.setAttribute("src", `${el.strDrinkThumb}`);
        document.querySelector('#drinkInfo').appendChild(drinkInstrux);
        document.querySelector('#drinkInfo').appendChild(drinkPix);


      })
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
    
