let lipstick = prompt("enter a makeup brand to find it's lipstick")
fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${lipstick}&product_type=lipstick`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      // let name = []
      // response.forEach((el)=>{
      console.log(response)
      document.querySelector('.brandName').textContent=response[0].name
      document.querySelector('img').src=response[0].image_link
      document.querySelector('.description').textContent=response[0].description

      console.log()
    // })
  })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
