document.querySelector("button").addEventListener("click", function() {
  let api = "https://api.kanye.rest";
  fetch(api)
    .then(res => res.json())
    .then(response => {
      console.log(response);


      let kanyeQuote = document.getElementById("quote");
      kanyeQuote.innerHTML=response.quote;

    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    })
});
