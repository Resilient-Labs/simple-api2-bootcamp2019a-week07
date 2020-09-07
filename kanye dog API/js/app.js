let button = document.querySelector('.button')
let form = document.querySelector('.form')



const doggieDoo = () =>{
  fetch(`https://random.dog/woof.json`)
  .then( res => res.json())
  .then(data => {
    console.log(data)
    document.getElementById('doggo').src = data.url;
    });


  fetch(`https://api.kanye.rest`)
    .then( res => res.json())
    .then(data => {
      console.log(data)
      document.getElementById('tweet').textContent = data.quote;
    })

}


button.addEventListener('click', doggieDoo);

form.addEventListener("submit", (event) => {
  event.preventDefault()
})
