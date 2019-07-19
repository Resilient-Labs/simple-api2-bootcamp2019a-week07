//add event listener here on click//
//event listener should activate pull the value entered into the dom//
//the should activate the fetch//
//this should push the response from the fetch back into the paragraph//
document.getElementById('button').addEventListener("click", (e) => {
    var word = document.getElementById('input').value
    document.getElementsByTagName("section")[0].classList.add("definitionBox");
    getDefinition(word)

});


///function to fetch
function getDefinition (term) {
fetch('https://www.dictionaryapi.com/api/v3/references/collegiate/json/'+term+'?key=4855a37c-1179-4b6a-8580-0449cdb89b36')
  .then(response => response.json())
  .then(response => {
   let definition = response;
   definitionToDom(definition)
   console.log(definition)
  })
}

function definitionToDom (description) {
  document.getElementById('term').innerHTML = description[0].hwi.hw;
  document.getElementById('grammar1').innerHTML = "grammar: " + description[0].fl;
  document.getElementById('shortdef1.1').innerHTML = description[0].shortdef[0];
  document.getElementById('shortdef1.2').innerHTML = description[0].shortdef[1];
  document.getElementById('shortdef1.3').innerHTML = description[0].shortdef[2];
  document.getElementById('grammar2').innerHTML = "grammar: " + description[1].fl;
  document.getElementById('shortdef2.1').innerHTML = description[1].shortdef[0];
  document.getElementById('shortdef2.2').innerHTML = description[1].shortdef[1];
  document.getElementById('shortdef2.3').innerHTML = description[1].shortdef[2];
// for(let x = 0; x<3; x++){
// if(description[1].shortdef[x] !== 'undefined'){
  document.getElementById('deflist1').style.display = "block";
  document.getElementById('deflist2').style.display = "block"
  }

///function to put the words into the document

///function to change the class
//short definition will produce an array that has multiple definition.
//I need a function  that will create a span for the length of the array and give it the value of the index and then put the value of the index
//inside of the span. and I want the span to
