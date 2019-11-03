const btn = document.querySelector("button")
let input;
// let info = document.querySelector('.info')
btn.addEventListener('click', ()=>{
input = document.querySelector("input").value
fetch(`http://NflArrest.com/api/v1/player/arrests/${input}`)
    .then(res => res.json())
    .then(response => {
      var ul = document.querySelector('#make');
      let r = response;
      r.forEach((el)=>{
        for (let [key, value] of Object.entries(el)) {
          if (key === "Description"){
          console.log(key + ':' + value)
          var li = document.createElement("li");
          li.appendChild(document.createTextNode(`${key}: ${value}`))
          ul.appendChild(li)
        }
      }})
      // response.player.forEach(function(x){
      //   let li = document.createElement("li");
      //   let text = document.createTextNode(x);
      //   li.appendChild(text);
      //   document.getElementById("make").appendChild(li);
      // });
    })
    .catch(err =>{
      console.log(`error ${err}`)
      alert("sorry, no results for this search")
    });

  })
