//when user clicks on button, browser will relay chuck norris jokes

document.querySelector('button').addEventListener('click',getJoke)

function getJoke(){
    fetch(`https://api.chucknorris.io/jokes/random`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        document.querySelector('h2').innerText=data.value
    })
}
