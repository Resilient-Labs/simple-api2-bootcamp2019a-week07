let ul = document.querySelector("ul")
document.querySelector('button').addEventListener("click", (e) =>{
  e.preventDefault();
  fetch(`https://official-joke-api.appspot.com/jokes/random`)
      .then(res => res.json())
      .then(response => {
        // console.log(response)
        let li1 = document.createElement("li")
        let li2 = document.createElement("li")

        li1.appendChild(document.createTextNode(response.setup))
        li2.appendChild(document.createTextNode(response.punchline))
        ul.appendChild(li1)
        ul.appendChild(li2)
      })
      })

      // .catch(err => {
      // console.log(`error ${err}`)
      // alert("sorry, there are no results for your search")
      // });
