
document.querySelector(".clicky").addEventListener('click', crackJoke)

function crackJoke(){

    let apiLink = `https://api.chucknorris.io/jokes/random`
    fetch(apiLink)
    .then(res => res.json()) 
    .then(data => {
        document.querySelector("h2").innerText = data.value
        document.querySelector("img").src = data.icon_url
        console.log(data)
    
    })
    .catch(err =>{
    console.log('error' + err);
    })

}

