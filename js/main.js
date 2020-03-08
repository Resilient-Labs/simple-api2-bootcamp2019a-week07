const button = document.querySelector('button')

console.log("stacy");

document.querySelector('button').addEventListener('click',()=>{
let userInput = document.querySelector('input').value

  fetch(`https://pixabay.com/api/videos/?key=15522996-51ee64dbd4b5a3de56d952e07&q=${userInput}&image_type=photo`)
  .then(res => res.json())
  .then(response => {
    console.log(response)
    let imageSearch = response.hits[0]
    let video = document.querySelector('iframe').src= imageSearch.videos.large.url  





  })
  })
