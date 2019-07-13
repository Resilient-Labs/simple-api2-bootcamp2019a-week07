document.querySelector("button").onclick = () => {
  const activity = document.querySelector("#activitySelect").value

  fetch(`http://www.boredapi.com/api/activity?type=${activity}`)

  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    console.log(response)
    document.querySelector("h3").innerHTML = response.activity
    document.querySelector("h4").innerHTML = response.type
  })
  .catch(err => {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
  });
}
