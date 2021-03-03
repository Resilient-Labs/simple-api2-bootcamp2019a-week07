/********
Cats and Wine
*********/
//https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=


const url = `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=`

const drinks = document.querySelector('#drinks')
const catFacts = document.querySelector('#catFacts')
const response = document.querySelector('#response')


document.querySelector('button').addEventListener('click', clicky)

function clicky() {
  document.querySelector('ol').innerHTML = ''
  response.innerText=''
  if (Number.isNaN(Number(drinks.value)) === false && Number(drinks.value) >= 1){
    /****
    Start of Fetch
    ****/
    fetch(url+drinks.value)
      .then(res => res.json())
      // parse response as JSON
      .then(data => {
        console.log(data)
        if(Number(drinks.value) === 1){
          let li = document.createElement('li')
          li.innerText = data.text
          catFacts.appendChild(li)
        }
        else {
          data.forEach((item, i) => {
            let li = document.createElement('li')
            li.innerText = item.text
            catFacts.appendChild(li)
          });
        }
        response.innerText = 'Before each glass think about the following:'
      })
      .catch(err => {
        console.log(`error ${err}`)
      });

      /*********
      End of Fetch
      *********/
  }
  else {
    //output incorrect input
    response.innerText = 'You need more cats in your life'
  }


}
//
