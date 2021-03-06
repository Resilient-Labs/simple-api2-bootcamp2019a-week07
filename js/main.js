document.querySelector('button').addEventListener('click', getDefinition)

function getDefinition() {


  let word = encodeURIComponent(document.getElementById('word').value)
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`
  console.log(url)
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('#wordResult').innerText = data[0].word
      document.querySelector('#definition').innerText = data[0].meanings[0].definitions[0].definition
      document.querySelector('#pos').innerText = data[0].meanings[0].partOfSpeech
    })

    .catch(err => {
      console.log(`error ${err}`)
    });
  console.log(url)
}
