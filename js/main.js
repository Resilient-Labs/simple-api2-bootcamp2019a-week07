document.querySelector('button').addEventListener('click', askKanye)
// document.querySelector('button').addEventListener('click', frame)
document.querySelector('button').addEventListener("click", function(e) {
  // e.preventDefault;
  document.querySelector('.kanyeLip').classList.remove("animation");
  void document.querySelector('.kanyeLip').offsetWidth;
  document.querySelector('.kanyeLip').classList.add("animation");
}, false);

function askKanye(){
  let kanyeApiUrl = `https://api.kanye.rest`
  fetch(kanyeApiUrl)
  .then(res => res.json())
  .then(data => {
    document.querySelector('.quote').innerText = data.quote
    // document.querySelector('.kanyeLip').classList.toggle('animation')
  })
  .catch(err => {
    console.log(`${err} No Quote Found`)
  })
  
}



