document.querySelector('button').addEventListener('click', getinfo)


function getinfo(){
let game = document.querySelector('input').value
// always use https://
let url = `https://animechan.vercel.app/api/random`
fetch(url)
.then(res => res.json())
.then(data => {
    console.log(data)
 document.querySelector('h2').innerText = data.anime
 document.querySelector('h3').innerText = data.character
 document.querySelector('h4').innerText = data.quote
})
}
