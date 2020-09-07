//
function potter(){
  let inputtedName = document.querySelector("input").value
  document.querySelector("input").value = ""
   fetch(`https://www.potterapi.com/v1/characters?key=$2a$10$S4WjbXIBgn0FRHmbe3stJefXTKbIeRiEKb5W3I7NXypC4WCAHxNiG`)
    .then(response => response.json())
    .then(data => {
      for (i = 0; i < data.length; i++){
        if (inputtedName == data[i].name){
          // console.log(data[i]);
          document.getElementsByTagName("h1")[0].innerHTML = data[i].name
          document.getElementsByTagName("span")[0].innerHTML = data[i].house
          document.getElementsByTagName("p")[0].innerHTML = data[i].role
        }
      }
    })
//
// })
}
document.querySelector('button').addEventListener('click', (e) =>{
  potter()
})
// document.querySelector("input").addEventListener("keypress", (e) => {
// if(e.key === "Enter"){
//   console.log('hello');
//   potter()
// }
// })

// name  house   role
