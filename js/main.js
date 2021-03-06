document.querySelector('button').addEventListener('click',searchTheScripture)

function searchTheScripture() {
  let ingredient = document.querySelector('input').value
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`

  fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    for(let i =0; i < data.meals.length; i++){

      let meal = document.createElement('h4')
      let image = document.createElement('img')

      meal.innerText = data.meals[i].strMeal
      image.src = data.meals[i].strMealThumb

      let container = document.createElement('div')
      container.appendChild(meal)
      container.appendChild(image)
      document.querySelector('.DisplayFood').appendChild(container);
    }

  })
}
