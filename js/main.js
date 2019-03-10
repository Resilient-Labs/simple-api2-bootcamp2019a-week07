// take image from  API and diplay it
//
//take img from  api and display it

makeup();
document.querySelector(".next").onclick = forwards;
document.querySelector(".prev").onclick = backwards;

const makeupArray = [];

let i = 0;

function makeup() {
  let apiURL = "http://makeup-api.herokuapp.com/api/v1/products.json";

  fetch(apiURL)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      response.forEach(function(el) {
        console.log(el.image_link);
        makeupArray.push(el.image_link);
      });
      document.querySelector("img").src = makeupArray[0];
    })
    .catch(err => {
      console.log(`error ${err}`);
      // alert(
      //   "Date must be between Jun 16, 1995 and Oct 25, 2018 and written in YYYY-MM-DD form."
      // );
    });
}

// when click go to the next fact which starts in array
function forwards() {
  i--;
  if (i == -1) {
    i = makeupArray.length - 1;
  }
  document.querySelector("img").src = makeupArray[i];
}
// when click go to the previous fact which starts in array
function backwards() {
  i++;
  if (i == makeupArray.length) {
    i = 0;
  }
  document.querySelector("img").src = makeupArray[i];
}
//addeventlistener for keys being pressed
document.onkeydown = zebra; //onkeydown is the universal term used for keyboards
function zebra(e) {
  // zebra is calling on two prior functions
  if (e.keyCode === 39) {
    backwards();
  }
  if (e.keyCode === 37) {
    forwards();
  }
}
