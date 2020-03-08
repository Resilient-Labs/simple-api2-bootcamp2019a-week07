let artistName = prompt('what is your favorite artist name?')
// let artistName = document.getElementById('favoriteArtist').value


document.getElementById('generator').addEventListener('click', function(){
  fetch(`http://theaudiodb.com/api/v1/json/1/search.php?s=${artistName}`)
      .then(res => res.json())
      .then(response => {
        console.log(response)
        document.getElementById('title').innerHTML = response.artists[0].strArtist
        document.getElementById('description').innerHTML = response.artists[0].strBiographyEN 
        document.getElementById('celebrityPics').src = response.artists[0].strArtistThumb

        // // NextCall(response.status)

      })
});
