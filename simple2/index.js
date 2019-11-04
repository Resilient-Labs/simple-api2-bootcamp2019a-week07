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
      console.log(json.recipes[1].title)

      // let recipeList = json.recipes[i]
      // console.log(recipeList.title , recipeList.source_url)
      let recipeList = json.recipes
      for(let i=0; i<5; i++){
        if(recipeList[i]<=recipeList[5]){
          var textNode = document.createElement("div");
           textNode.innerHTML = `<a href="${recipeList[i].source_url}" target=_blank"">${recipeList[i].title}</a>`;
          result.appendChild(textNode);
          console.log(recipeList)
    }

}
      let images = json.recipes[1].image_url
       document.querySelector('img').src = images;



    }).catch(err =>{
        console.log(`error ${err}`)
        alert('sorry, there are no results for your search')

    });
})
