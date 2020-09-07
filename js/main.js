let button = document.querySelector("button");
// function catFacts () {
    button.addEventListener("click", ()=>{
        fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=1`)
        .then(res => res.json())
        .then(data => {
        console.log(data.text)
       document.getElementById("facts").textContent = data.text;
     });
    });
