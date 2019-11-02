let key='m6kFVXw9cKOD53XpoyI4uc7ThHGZ8nZTU38ppoGVEhMjNLhtIki8Lxq9G52NtBOb'
// let apikey = '358b05e4cefe35605b076cef671c39c9a004087f56dd27fb588d414c7a99d0cd'
let button=document.querySelector('button')
let appendedArtist=document.querySelector('#artist')
let appendedTrack=document.querySelector('#track')
let appendedLyrics=document.querySelector('#lyrics')

let result=document.querySelector('h2')


button.addEventListener('click',()=>{
  let artist=document.querySelector('#inputOne').value
  let track=document.querySelector('#inputTwo').value



fetch(`https://orion.apiseeds.com/api/music/lyric/${artist}/${track}?apikey=${key}`)
  .then(res => res.json())
  .then(response=>{
    console.log(response)
    let output=response.result
    // append the artist name
let createNodeArtist=document.createTextNode(output.artist.name)
appendedArtist.appendChild(createNodeArtist)

// append track name
let createNodeTrack=document.createTextNode(output.track.name)
appendedTrack.appendChild(createNodeTrack)

// append lyrics
let createNodeLyric=document.createTextNode(output.track.text)
appendedLyrics.appendChild(createNodeLyric)


// document.querySelector('img').src=response.urls.small
// artist name response.result.artist.name
// track name response.result.track.name
// lyrics response.results.track
  })
  .catch(err=>{
    console.log(err)
  })
  })
