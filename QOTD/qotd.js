document.querySelector("button").addEventListener("click", function() {
  fetch("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=" + `${dd}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      document.getElementById('display1').innerHTML = response[0].content
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    });

});

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();
var monthName
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
today = monthNames[mm] + ' ' + dd + ', ' + yyyy;
document.getElementById('date').innerHTML = today
// sets date to today's date
