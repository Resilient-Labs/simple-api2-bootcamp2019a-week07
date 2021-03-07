
document.querySelector('button').addEventListener('click', getCard)

function getCard(){
  let apiLink = `https://sakura-card-captor.netlify.app/.netlify/functions/server/api/random_card`
  fetch(apiLink)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);
      document.querySelector('h2').innerText = `The` + ` ` + data.name
      document.querySelector('img').src = data.url
    })
    .catch(err => {
      console.log(`error ${err}`);
    })
}
