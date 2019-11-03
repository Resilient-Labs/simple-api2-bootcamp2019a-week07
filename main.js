const btn = document.querySelector("button")

btn.addEventListener('click', ()=>{

const apikey= "4c9012ff-69e2-42e0-94e9-6ced5b1d4506"
let breed= document.querySelector("input").value.toLowerCase()
// fetch(`https://api.thecatapi.com/v1/images/search?apikey=${apikey}&breed_id${breed}`)
fetch("https://api.thecatapi.com/v1/breeds")
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      // document.querySelector("img").src = response._embedded.events[10].images[0].url
      // document.querySelector("answers").src = response._embedded.events
      // document.querySelector(".return").innerHTML = response
      // document.querySelector(".pic").src = response[0].url
      // debugger;
      let currentDescription = ""
      for(var index in response) {
        if (response[index].name.toLowerCase() ===breed ) {
          currentDescription = response[index].description
        }
      }
      document.querySelector(".return").innerHTML = currentDescription


    })
    .catch(err => {
        //console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
  })
