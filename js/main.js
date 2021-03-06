//Property of GardnerGang
document.querySelector('button').addEventListener('click', getData)

  function getData(){
    let apiLink = `https://api.thecatapi.com/v1/images/search`
    fetch(apiLink)
      .then(res => res.json())
      .then(data => {
        document.querySelector('img').src = `${data[0].url}`
        console.log(data)
      })
      .catch(err => {
        console.log(`error ${err}`)
      })
  }
