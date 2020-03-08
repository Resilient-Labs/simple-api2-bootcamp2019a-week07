
  document.querySelector("button").addEventListener ("click", dogFinder)
function dogFinder (){       //this is teh function and parameters, the fetch comes from nasa. the temperal literal is for a day and month that will be changed.

fetch(`https://dog.ceo/api/breeds/image/random`)
  .then(res => {return res.json()}) //jason makes it so i can access the info
  .then(response => {
    document.querySelector("img").src = response.message  //this merges the images with the websites objects to be shown on click. message is one of the pathways to get to the images. 
    console.log(response)
})
}
