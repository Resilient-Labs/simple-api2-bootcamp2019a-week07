function joke(){
  fetch(`https://official-joke-api.appspot.com/random_joke`)
    .then (res => res.json())
    .then (data => {
      document.getElementById("setup").innerHTML = data.setup;
      document.getElementById("punch").innerHTML = data.punchline;
    })
}
