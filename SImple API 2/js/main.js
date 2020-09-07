var button= document.querySelector('button')
button.addEventListener('click',fetchFunction)

function fetchFunction(){
fetch(`https://api.icndb.com/jokes/random`)
    .then(response => response.json())
    .then(data => {
      document.querySelector('p').innerHTML = data.value.joke;

    console.log(data);
    })
}
