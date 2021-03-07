// https://catfact.ninja/fact
// https://api.thecatapi.com/v1/images/search


document.querySelector('button').addEventListener('click', getData)

function getData() {
  let date = document.querySelector('button').value
  // template literal
  let apiLink = `https://api.thecatapi.com/v1/images/search`
  fetch(apiLink)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

      document.querySelector('img').src = data[0].url


      console.log(data)
    })
    .catch(err => {
      console.log(`error ${err}`)
    })

}
