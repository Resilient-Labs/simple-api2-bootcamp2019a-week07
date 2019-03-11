document.querySelector('form').addEventListener('submit',alGen)
function alGen(e){
  e.preventDefault();
  let artist= document.querySelector('#artist').value;
  fetch(`http://www.theaudiodb.com/api/v1/json/1/discography.php?s=${artist}`)
    .then(response=> response.json())
    .then(response => {
      let albumRes= response.album;
      albumRes.forEach(album=>{
        const titleElement=document.createElement("li"),
        addElement= document.getElementById("albumList");
        titleElement.textContent= album.strAlbum;
        addElement.appendChild(titleElement)
        })
    })
    .catch(err=>{
      console.error(err.message)
    })
}
