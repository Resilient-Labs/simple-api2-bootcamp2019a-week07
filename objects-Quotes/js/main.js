
document.querySelector('button').addEventListener('click', getQuote)


const url = `https://api.kanye.rest/`

function getQuote(){
  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
  console.log(data)
  document.querySelector('.quote').innerText = data.quote
  // let newKayne = document.createElement('span')
  // let new2 = document.createElement('span')
  // let newQuote = document.querySelector('.quote')
  // let newQ2 = document.querySelector('p')
  //
  // new2.innerText += data.quote
  // newKanye.innerText += ' -Kanye west'
  //
  // newQ2.appendChild(new2)
  // newQuote.appendChild(newKanye)


  })
  .catch(err => {
    console.log(`error ${err}`)
  });
  getKanye()

}
function getKanye(){
  let kw = document.querySelector('.cool')
  kw.style.setProperty('display', 'block')
}





// https://www.themealdb.com/api/json/v1/1/random.php
// https://api.adviceslip.com/advice/search/spiders`
// https://api.giphy.com/v1/gifs/search?api_key=toqlVYXbdNIubNTOGsRA6LuY3S2pNfsn&q=${term}&limit=3&offset=0&rating=g&lang=en

//   const url = `https://api.kanye.rest/`
//
//   fetch(url)
//   .then(res => res.json()) // parse response as JSON
//   .then(data => {
//   console.log(data)
//   document.querySelector('h1').innerText = data.quote
//
// })
//   .catch(err => {
//     console.log(`error ${err}`)
//   });
