//https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=R1BZfDNGqisSK0luSKuOAWEZwN896ebG

let simpleMovieApi = {
  button: document.querySelector("button"),
  fetchMovie: () => {
  const input = document.querySelector("input").value;
  fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${input}&api-key=R1BZfDNGqisSK0luSKuOAWEZwN896ebG`)
      .then(res => res.json())
      .then(jsonRes => {
        document.getElementById("first").innerHTML = (`Your movie: ${jsonRes.results[0].display_title} Age Rating:${jsonRes.results[0].mpaa_rating} Summary: ${jsonRes.results[0].summary_short} ${jsonRes.results[0].link.suggested_link_text} ${jsonRes.results[0].link.url} `);
        document.getElementById("second").innerHTML = (`Other Results: ${jsonRes.results[1].display_title} Summary: ${jsonRes.results[1].summary_short} Find Out More: ${jsonRes.results[1].link.url}`);

      })
      .catch(err => {
        console.log(`error ${err}`);
        alert("sorry, there are no results for your search");
      })
    }
  }
simpleMovieApi.button.addEventListener('click', simpleMovieApi.fetchMovie);
