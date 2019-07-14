document.querySelector("button").addEventListener('click',function () {
  fetch("https://official-joke-api.appspot.com/random_joke")
   .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
   .then(response => {
       console.log(response)
       document.querySelector("section").innerHTML = response.setup + ' ' + response.punchline
   })
   .catch(err => {
       console.log(`error ${err}`)
//         alert("sorry, there are no results for your search")
   });

});
