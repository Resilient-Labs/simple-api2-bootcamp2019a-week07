
document.querySelector('button').addEventListener('click', findCard)

function findCard(){
    let card = document.querySelector('input').value
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${card}`
    


fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.data[0].card_images[0].image_url
        document.querySelector('.name').innerText = data.data[0].name
        document.querySelector('.attr').innerText = data.data[0].attribute
        document.querySelector('.race').innerText = data.data[0].race
        document.querySelector('.type').innerText = data.data[0].type
        document.querySelector('.atk').innerText = data.data[0].atk
        document.querySelector('.def').innerText = data.data[0].def
        document.querySelector('.desc').innerText = data.data[0].desc
        document.querySelector('.cost').innerText = "$" + data.data[0].card_prices[0].amazon_price

     
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}