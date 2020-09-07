function getJoke () {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      document.getElementById('result').innerHTML = response.value
    })
}

document.querySelector("button").addEventListener('click', (e) => {
  getJoke()
})
