// `https://official-joke-api.appspot.com/jokes/random`//

let button = document.querySelector("button"); //selects button
    button.addEventListener("click", ()=>{
        fetch(`https://official-joke-api.appspot.com/jokes/random`) //fetch call
        .then(res => res.json()) //parse json
        .then(data => {
        let jokeSetup = data.setup
        let jokePunchline =data.punchline
       document.getElementById("jokeSetup").textContent = jokeSetup;
       document.getElementById("jokePunchline").textContent = jokePunchline;
       //displays the data into p tag in html 
     });
    });

