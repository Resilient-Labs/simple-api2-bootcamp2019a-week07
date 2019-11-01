
const btn = document.querySelector("button")
const result = document.querySelector("#result")

btn.addEventListener('click',() =>{
const input= document.querySelector("#nameInput").value

fetch(`https://api.agify.io?name=${input}`)
    .then(res => res.json())
    // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response.age)
      const resultss = document.createTextNode(response.age)
      result.appendChild(resultss)
      // resultss(0);
        // console.log(response.country[0].country_id)
    })

    .catch(err => {
        console.log(`error ${err}`)
        return("sorry, there are no results for your search")
    });

  })
