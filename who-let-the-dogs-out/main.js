// mark helped
// Goal: Display data returned from an api

// comments for study purposes
// create button
document.querySelector('button').addEventListener('click', getPic)


// function contains variables and fetch
function getPic() {

  let breed = document.querySelector('input').value.toLowerCase()
  let url = `https://dog.ceo/api/breed/${breed}/images/random`
  console.log(url)

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      // document.querySelector('img').src =
      document.querySelector('img').src = data.message
      let yourImg = document.getElementById('image');
      if (yourImg && yourImg.style) {
        yourImg.style.height = '300px';
        yourImg.style.width = '50%';
        // yourImg.style.align = 'center';
      }
      // document.querySelector('h2').innerText = data.status
      // console.log(data.message)
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}
