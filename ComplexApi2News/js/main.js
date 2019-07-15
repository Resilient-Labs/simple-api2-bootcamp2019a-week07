
const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=leGlTO72gKn6zjPeQxe04a5XiYTfQGDZ'
let apiKey = "leGlTO72gKn6zjPeQxe04a5XiYTfQGDZ"
let someVar = '';

document.querySelector('form').addEventListener('submit',function(e){
  e.preventDefault()
  let searchTerm = document.querySelector("input").value
  fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=leGlTO72gKn6zjPeQxe04a5XiYTfQGDZ`)
  .then(res=> res.json())
  .then(response => {
    search(response)
    // search(response)
    console.log(response.response.docs.length)
    console.log("yo", response.response.docs)
    console.log("yo1", response.response.docs[0].headline.main)
    let articles = response.response.docs
    //articles.forEach() function(el,i)
    articles.forEach((el,i) => {
    let h1 = document.querySelector("h1")
    let h2 = document.createElement("h2")
    let p = document.createElement("p")

    p.appendChild(document.createTextNode(el.headline.main))
    h1.appendChild(p)

    h2.appendChild(document.createTextNode(el.snippet))
    h1.appendChild(h2)
    })

  })
})

document.querySelector('form').addEventListener('submit',function(e){

  e.preventDefault()
  searchTerm = document.querySelector("input").value
  fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=a40fea74983641fabb13322f75329c09`)
  .then(res=> res.json())
  .then(response=> {
    console.log("yoyo",response)
    articlesX = response.articles
    articlesX.forEach((el,i)=> {
      let h3 = document.querySelector("h3")
      let p1 = document.createElement("p")
      let p2 = document.createElement("p")

      p1.appendChild(document.createTextNode(el.title))
      h3.appendChild(p1)

      p2.appendChild(document.createTextNode(el.description))
      h3.appendChild(p2)



    })



  })
})







function search(response) {

  console.log(response)
  someVar = 'string'

}

// cannot pass data through function
// declare global variable








//   function gotData(data){
//
//     let articles = data.response.docs
//
//     for (let i =0; i< articles.length; i++) {
//       createElement('h1',articles[i].headline.main);
//       createP(articles[i].snippet)
//     }
//
//   }
