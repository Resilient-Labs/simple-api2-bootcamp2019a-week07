let dropdown = document.querySelector('select')
dropdown.length = 0
let listOption = document.createElement('option')
listOption.text = 'Choose Breed'

dropdown.add(listOption)
dropdown.selectedIndex = 0

fetch("https://api.thecatapi.com/v1/breeds")
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    let option
    for (let i = 0; i < response.length; i++) {
      option = document.createElement('option');
      option.text = response[i].name;
      option.value = response[i].id;
      dropdown.add(option);
      console.log(response)
    }
  })
  .catch(err => {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
  });

let result = document.querySelector('button').addEventListener('click', () => {
  let selectedBreed = document.querySelector('select').value
  fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${selectedBreed}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      // console.log(response)
      document.querySelector('img').src = response[0].url
      
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    });
})
