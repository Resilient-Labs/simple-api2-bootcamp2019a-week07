

document.getElementById('search').addEventListener('click', function (e){
  e.preventDefault()
  let artist = document.getElementById('artistName').value
  let song = document.getElementById('songName').value
let api = `https://api.lyrics.ovh/v1/${artist}/${song}`
fetch(api)
.then(res => res.json())
.then(response => {
  console.log(response)
  insertText(response.lyrics)
})
.catch(error => {
  console.log(`error ${err}`)
  alert("sorry, there are no results for your search")
  })
});

function insertText (song){
  document.getElementById('lyrics').innerHTML = ""
  var lyrics = document.getElementById('lyrics')
  var words = document.createTextNode(song)
  lyrics.appendChild(words)
}

//%20 to represent spaces



// function filerLyrics (song){
//   console.log(song)
//   var addBreakPoint = document.createElement('br')
//   var intoArray = song.split(/(\r\n|\n|\r)/gm)
//   console.log(intoArray)
//   for (i = 0; i < intoArray.length; i++){
//       if(intoArray[i] === "↵"){
//         console.log(intoArray[i])
//       }
//     }
// }
