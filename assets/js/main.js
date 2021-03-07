document.querySelector('button').addEventListener('click', getDefinition);
document.querySelector('input').addEventListener('keydown', enterKey);

function enterKey(e) {
    if (e.code === 'Enter')
        getDefinition();
}

function getDefinition(){
    const word = document.querySelector('input').value;
    let displayWord = document.querySelector('h2');
    let definition = document.querySelector('p');
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "921368e540msh8b789dc142af2bep18b847jsn4329f2998aa5",
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
        }
    })
    .then(response => response.status === 404? response.text() : response.json())
    .then(data => {
        if (typeof(data) === 'string')
            displayWord.innerText = 'We\'re sorry, but have not yet added this word. Please try another word.'
        else {
            displayWord.innerText = data.word;
            definition.innerText = data.results[0]['definition'];
        }
    })
    .catch(err => {
        console.error(`Error: ${err}`);
    });
}