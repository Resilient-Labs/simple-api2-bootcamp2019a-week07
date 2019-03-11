document.querySelector('form').addEventListener('submit', activity)

function activity(e){
  e.preventDefault();
  let genre = document.querySelector('input').value
  fetch(`http://www.boredapi.com/api/activity?type=${genre}`)
  .then(res => res.json())
  .then(response =>{
    document.querySelector('p').textContent = response.activity
  })
  .catch(err => {
    console.log(`ouch ${err}`)
    document.querySelector('p').textContent = 'I\'m stumped. Try a different activity type.'
  })
}
