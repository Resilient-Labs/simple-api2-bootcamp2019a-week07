const button= document.querySelector('button')

button.addEventListener('click', () =>{
  let randomAdvice = document.querySelector('button').value
  //console.log(randomAdvice)
  fetch(`https://api.adviceslip.com/advice`)
    .then(res => res.json())
    .then(response =>{
      console.log(response.slip.advice)
      document.querySelector('p').innerHTML = response.slip.advice;
    })
    .catch(err =>{
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    });
})
