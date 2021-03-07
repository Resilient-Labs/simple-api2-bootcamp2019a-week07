document.querySelector("button").addEventListener("click", dogPhotos)

function dogPhotos(){
    let doggy = document.getElementById("breed").value.toLowerCase()
    let url = `https://dog.ceo/api/breed/${doggy}/images/random` 
    
    fetch(url)
        .then(res => res.json())
        .then(data =>{
        document.querySelector("img").src = data.message
    })
.catch(err => {
    console.log(`error ${err}`)
    })

}