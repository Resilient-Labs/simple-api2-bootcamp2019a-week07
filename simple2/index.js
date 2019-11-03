const button = document.querySelector('button')
const api ='7a24c25b2e4bf705b38ad004eb2c9c92'
const api2 = '89472b2fe22325434c51eab6b827dea49151cae8f2dc5a12d5ebf07dd261d4b0'
const result = document.querySelector('#result')
const image = document.querySelector('#image')
// parameters key=API_KEY

button.addEventListener('click', ()=>{
  const input = document.querySelector('input').value;

  fetch(`https://www.food2fork.com/api/search?key=${api}&q=${input}&page=1&sort=r`)
    .then(res => res.json())
    .then(json => {
      console.log(json)
      // let arrayTitle = json.recipes.map( x => x.title)
      // let arrayUrl = json.recipes.map( x => x.source_url)
      // console.log(arrayTitle, arrayUrl)



      let images = json.recipes[0].image_url
       document.querySelector('img').src = images;


      let recipeTitle = json.recipes[0].title
      let updatingTheDomWithTheRecipeName = document.createTextNode(recipeTitle)
      result.appendChild(updatingTheDomWithTheRecipeName)

      let mealUrl = json.recipes[0].source_url
      let updatingTheDomWithRecipeLink = document.createTextNode(mealUrl)
      result.appendChild(updatingTheDomWithRecipeLink)
      console.log(recipeTitle)


    }).catch(err =>{
        console.log(`error ${err}`)
        alert('sorry, there are no results for your search')

    });
})

// client oath : '9e09725240214c3f8d157d4b51063ec6'
// client id : 'e06666b5867442bdb961eb5d13575681'
//
//
// unsplash key: '89472b2fe22325434c51eab6b827dea49151cae8f2dc5a12d5ebf07dd261d4b0'
// unsplash secret: 'b6d9e78bfe0ecae2a66799cdc546e9645e5c217250128ffc9f1d694b7581b1a9'


// const api2 = 'd8c0001e608be4ff98345201dcf0d3f5'
// const apiID = '660d0900'
