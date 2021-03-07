document.querySelector('button').addEventListener('click', getJoke)

function getJoke() {

  let url = `https://official-joke-api.appspot.com/random_joke`
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.querySelector('.setup').innerText = data.setup
      document.querySelector('.punchline').innerText = data.punchline


    })

}
