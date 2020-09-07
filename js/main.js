let titles = document.querySelector('h2')
let images = document.querySelector('img')
let description = document.querySelector('p')
let time = document.querySelector('span')
let tag = document.querySelector('a')
let input = document.querySelector('input')
let data
let search = () =>{
  let updateInput = input.value.replace(/' '/g,'+')
  console.log(updateInput)
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `api.eventful.com/json/events/search?category=technology&l=${updateInput}&date=This+Month&within=50&sort_order=date&page_size=250&image_sizes=block200,large&change_multi_day_start=false&sort_direction=descending&app_key=6q5jCXr88H5TfZ4v`; // site that doesn’t send Access-Control-*
input.value = ''
    fetch(proxyurl+ url)
    .then(response => response.json())
    .then(contents => {
      data=contents
  })
    .catch(() => {
      titles.innerHTML = "Try Different Address"
    })


  setTimeout(()=>{
  console.log(data)
  //     titles.innerHTML = data.events.event[0].title
  // if (data.events.event[0].image.block200.url.startsWith('https:')){
  titles.innerHTML = data.events.event[0].title
  description.innerHTML = data.events.event[0].description
  time.innerHTML = data.events.event[0].start_time
  tag.href = data.events.event[0].url

  if(data.events.event[0].image!==null){
    if(!data.events.event[0].image.large.url.startsWith('https:')){
      images.src = 'https:'+data.events.event[0].image.large.url
    }else{
      images.src = data.events.event[0].image.large.url
    }
  }


  // }else{
  // images.src = 'https:' + data.events.event[0].image.block200.url
  // }
},3000)
}
