// example https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP/ first currency is base, 2nd is the target
/*
1. create a variable for the url with api key and api search parameters
2.start a fetch
console log data to finds its properties
3. click event and function to start the fetch on click
4. calculate the new dollar amount using the conversion rate returned
5. print conversion rate, base amount and target amount into dom, make this area only visible on click
6. hide the result area in between searches
7. why tf can't i clear the input value ugh - circle back with mentor
*/

document.querySelector('[name= "exchange"]').addEventListener('click', exchangeCurrency)
document.querySelector('[name="newExchange"]').addEventListener('click', startNewExchange)


const url = 'https://v6.exchangerate-api.com/v6/e49daf865b3c9eb448e15af8/pair/USD/EUR/'


function  exchangeCurrency(){
  const baseAmount = document.querySelector('input').value

  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(baseAmount * data.conversion_rate)
    document.querySelector('#exRate').innerText = data.conversion_rate
    document.querySelector('#baseDollar').innerText = baseAmount
    var targetAmount =  baseAmount * data.conversion_rate
    document.querySelector('#targetEuro').innerText = targetAmount
    exchangeCurrency = document.querySelector('#resultArea')
    exchangeCurrency.classList.remove('displayOnSearch')

  })
  .catch(err => {
    console.log(`error ${err}`)
  })

}

function startNewExchange(){
  exchangeCurrency.classList.add('displayOnSearch')
}






/* fetch ('https://dog.ceo/api/breeds/image/random')
.then(res => res.json())
.then(data => {
  console.log(data.message)
  document.querySelector('img').src = data.message
}) */
