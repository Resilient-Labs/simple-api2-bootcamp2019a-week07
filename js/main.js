document.querySelector('form').addEventListener('submit', advice)

function advice(e){
  e.preventDefault()
  let randomAdvice = document.querySelector('input').value
  console.log(randomAdvice)
  fetch(`https://api.adviceslip.com/advice`)
    .then(res => res.json())
    .then(response => {
        document.querySelector('p').innerHTML = response.slip.advice;
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
}
