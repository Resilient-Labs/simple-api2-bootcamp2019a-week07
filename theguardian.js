const button = document.querySelector('#button');

button.addEventListener('click', getArticle);

document.querySelector('#getText').addEventListener('keyup', event => {
  if(event.key === 'Enter') {
    getArticle();
  }
})

function getArticle() {
  fetch(`https://content.guardianapis.com/search?api-key=2cce9afd-a631-4455-850b-f62246214574`)
    .then(res => res.json())
    .then(response => {

      console.log(response)
      const footBall = document.createElement('p');

      function sports(){
        const footBallresults = []
        const getArticle = document.querySelector('#getText').value
        for (var i = 0; i < response.response.results.length; i++) {
          if(response.response.results[i].id.includes(getArticle)){
            footBallresults.push(response.response.results[i])
          }
        }
        return footBallresults
      }
      const footballStuff = sports();

      for(let i = 0; i < footballStuff.length; i++) {
        const putOnPage = document.createElement('li');
        putOnPage.innerHTML = `<a href=${footballStuff[i].webUrl}>${footballStuff[i].webTitle}</a>`;
        document.querySelector('ul').appendChild(putOnPage);
      }


      console.log(footballStuff);
      console.log(footballStuff[0].webTitle);
      //footBall.textContent =
      // document.appendChild(footBall)
      // footBall.innerHTML = ""
    })
}
