//
const btn = document.getElementById('button1')
btn.addEventListener('click', ()=> {
// // getExternalAPI
// let challenge = document.querySelector('.challenge').value
  fetch ("https://opentdb.com/api.php?amount=1")
  .then(res=>res.json())
  .then(response=>{

    document.querySelector('#results').innerHTML=response.results[0].question
    // document.querySelector("#results").innerHTML = response
    console.log(response.results[0].question)
    // for (var i = 0; i < question.length; i++) {
    //   array[i]
  })
})

  .catch(err=> {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
  })
