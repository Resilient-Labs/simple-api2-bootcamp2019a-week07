
fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
  .then(res => res.json())
  .then(response =>{
    const promises = []
    for(let i = 0; i < response.length; i++){
      const promise = fetch(`https://hacker-news.firebaseio.com/v0/item/${response[i]}.json`)
        .then(res => res.json())
        promises.push(promise)
    }
    return Promise.all(promises)
  })
  .then(stories => {
    stories.forEach((el)=>{
      const ol = document.querySelector('#storiesSec') //grab the ol from dom
      let li = document.createElement('li'); //create an li
      let combined = el.title + "  |  " +el.url
      li.appendChild(document.createTextNode(combined)); //append text to li
      ol.appendChild(li); //append li to ol
      // console.log(el.title, el.url)
    })
  })
  .catch(err => {
    console.log(`error ${err}`)
    alert("sorry,there are no results for your search")
  })
