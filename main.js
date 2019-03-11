  //adding click event to submit button
document.getElementById('form').addEventListener('click',function(e){
    //lets go over other stuff on wed.
  e.preventDefault();

  var userInput = document.getElementById("userInput").value
  var url = `https://jsonplaceholder.typicode.com/todos/${userInput}`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    document.getElementsByTagName("section")[0].style.display = "block"
    document.getElementById("id").innerHTML = data.id
    document.getElementById("description").innerHTML = data.title
    document.getElementById("completed").innerHTML = data.completed
  })
  .catch(error => console.error('Error:', error));
})
