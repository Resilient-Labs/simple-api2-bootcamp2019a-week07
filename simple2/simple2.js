document.querySelector("button").addEventListener("click", getData);

function getData() {
  // let memes = document.querySelector("input").value;
  let apilink = `https://api.imgflip.com/get_memes`;

  fetch(apilink)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("img").src =
        data.data.memes[Math.floor(Math.random() * 100)].url;
      console.log(data.data.memes);
    })

    .catch((err) => {
      console.log("error" + err);
    });
}
