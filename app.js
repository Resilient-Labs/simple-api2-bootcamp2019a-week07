let btn = document.querySelector('.btn')
btn.addEventListener('click', function(){
  let input = document.querySelector('.input').value
  fetch (`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=${input}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      let ul = document.querySelector('ul')
      ul.innerHTML = ''
      response.results.forEach(function(x){
        if (input === 'popularity.desc') {
          let li = document.createElement('li')
          li.appendChild(document.createTextNode(x.title + ' --- ' + x.popularity))
          ul.appendChild(li)
          console.log(x.title, x.popularity);
        } else if (input === 'release_date.desc') {
          let li = document.createElement('li')
          li.appendChild(document.createTextNode(x.title + ' --- ' + x.release_date))
          ul.appendChild(li)
          console.log(x.title, x.release_date);
        } else if (input === 'vote_average.desc') {
          let li = document.createElement('li')
          li.appendChild(document.createTextNode(x.title + ' --- ' + x.vote_average))
          ul.appendChild(li)
          console.log(x.title, x.vote_average);
        }
      });
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
})
