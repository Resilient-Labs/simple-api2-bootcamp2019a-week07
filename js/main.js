const clickForQuote=document.querySelector('button');
clickForQuote.addEventListener('click',breakingBadQuote)


function breakingBadQuote(){
  fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        // console.log(response[0].quote)
        // console.log(response[0].author)
        document.querySelector('#randomQuote').innerHTML=response[0].quote
        document.querySelector('.whoSaidQuote').innerHTML=response[0].author


      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });

}
