// Simple API 2
// Goal: Display data returned from an api




document.querySelector('button').addEventListener('click',getWord)


////////////////////////////////////////////every after ? = API key//
function getWord(){
  const input = document.querySelector('#item').value
  const key = '28e87cce-0516-4b02-bc7a-ff9a791cb000'
  const url = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${input}?key=${key}`

// const variable go inside the function//
console.log(url)
  fetch(url)
    .then(res => res.json()) //this is just the syntax//parse response as JSON//
    .then(data=>{
      console.log(data)
      document.querySelector('.definition').innerText = "Definition: " + data[0].shortdef
      document.querySelector('.synonym').innerText = "Synonyms: " + data[0].meta.syns
    })
    .catch(err =>{
      alert(`error ${err}`)
    })

}
