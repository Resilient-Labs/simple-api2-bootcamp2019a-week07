document.querySelector('button').addEventListener('click',getData)
function getData(){
  fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      document.querySelector('.USDrate').innerText=`$${data.bpi.USD.rate}`
      document.querySelector('.USDdescription').innerText=data.bpi.USD.description
      document.querySelector('.time').innerText=data.time.updated
      document.querySelector('.GBPrate').innerText=`$${data.bpi.GBP.rate}`
      document.querySelector('.GBPdescription').innerText=data.bpi.GBP.description
      document.querySelector('.EURrate').innerText=`$${data.bpi.EUR.rate}`
      document.querySelector('.EURdescription').innerText=data.bpi.EUR.description
    })
    .catch(err=>{
      console.log("error" + err)
    })
}
