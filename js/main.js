
document.querySelector('button').addEventListener('click',getMedia)

function getMedia() {



const url = `https://v2.jokeapi.dev/joke/Any?type=single`
console.log(url)
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

      console.log(data);

      document.querySelector('span').innerText = data.joke;

    })
    .catch(err => {
        console.log(`error ${err}`)
});
}
