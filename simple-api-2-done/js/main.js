//geniusKey=jvswMP_u_XBWEexz-X6wlik7UmSGX-dRT6iygxQrHI_imN5yYBaoClTuWyxdSVGf
//nyt APP ID = 49c01156-0835-42e1-93c4-bbaa661828c9
// NYT Key = VhpmDOL7ssDBaDUd8WEUAqeRYwRAeFk0

let start = document.getElementById('start')

//let search = document.querySelector('input').value

start.addEventListener('click', () => {
  // console.log("eric")
  fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=VhpmDOL7ssDBaDUd8WEUAqeRYwRAeFk0	`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
   //        console.log(response)
   let random = Math.floor((Math.random()* response.response.docs.length))
    // document.querySelector("#first").innerHTML = response.response.docs[random].abstract
    document.querySelector("#second").innerHTML = response.response.docs[random].web_url
    //let random = Math.floor((Math.random()* response.response.docs.length
     // console.log(Math.floor((Math.random()* response.response.docs.length)))
     // console.log(response.response.docs)
     console.log(response)
      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });
})

//  let randomImage = Math.floor((Math.random()* retrieveGif.data.length))
