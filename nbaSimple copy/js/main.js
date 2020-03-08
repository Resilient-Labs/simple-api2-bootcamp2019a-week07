const players = [{lastName:"James", firstName:"Lebron"},{lastName:"Leonard", firstName:"Kawhi"},{lastName:"Durant", firstName:"Kevin"},{lastName:"Davis", firstName:"Anthony"},{lastName:"Curry", firstName:"Stephen"},{lastName:"Harden", firstName:"James"},{lastName:"Antetokounmpo", firstName:"Giannis"},{lastName:"Embiid", firstName:"Joel"},{lastName:"Jokic", firstName:"Nikola"},{lastName:"George", firstName:"Paul"},{lastName:"Lillard", firstName:"Damian"},{lastName:"Irving", firstName:"Kyrie"},{lastName:"Thompson", firstName:"Klay"},{lastName:"Westbrook", firstName:"Russell"},{lastName:"Butler", firstName:"Jimmy"},{lastName:"Griffin", firstName:"Blake"},{lastName:"Anthony", firstName:"Carmelo"},{lastName:"Simmons", firstName:"Ben"},{lastName:"Beal", firstName:"Bradley"},{lastName:"Walker", firstName:"Kemba"},{lastName:"Mccollum", firstName:"CJ"},{lastName:"Russell", firstName:"Dangelo"},{lastName:"Mitchell", firstName:"Donovan"},{lastName:"Booker", firstName:"Devin"},{lastName:"Siakam", firstName:"Pascal"},{lastName:"Lowry", firstName:"Kyle"},{lastName:"Derozan", firstName:"Demar"},{lastName:"Tatum", firstName:"Jayson"},{lastName:"Lavine", firstName:"Zach"},{lastName:"Paul", firstName:"Chris"},{lastName:"Brown", firstName:"Jaylen"},{lastName:"Oladipo", firstName:"Victor"},{lastName:"Wall", firstName:"John"},{lastName:"Wade", firstName:"Dwyane"},{lastName:"Williams", firstName:"Lou"},{lastName:"Rose", firstName:"Derrick"}]

const startButton = document.querySelector('.startButton')

startButton.addEventListener('click', showPlayers)

function showPlayers(){
  var playerOne = players[getRandomIndex(players.length)]
  var playerTwo = players[getRandomIndex(players.length)]

  const haveShownImages = playerOne.lastName && startButton;

  if (haveShownImages) {
    console.log('this runs')
    deleteButton(startButton)
  }

  fetchAndDisplayPlayer(playerOne, 'imgOne');
  showVs();
  fetchAndDisplayPlayer(playerTwo, 'imgTwo');
}

function fetchAndDisplayPlayer(player, imgId){
  fetch(`https://nba-players.herokuapp.com/players/${player.lastName}/${player.firstName}`)
  .then(response => {
    console.log(response);
    document.getElementById(imgId).src=response.url
  })
  .catch(console.log);
}

function deleteButton(buttonToDelete){
  buttonToDelete.remove();
  console.log('kobe');
}

function showVs() {
  document.querySelector('span').innerHTML = "VS";
}

function getRandomIndex(maxIndex){
  return Math.floor(Math.random() * maxIndex)
}

//Figure out how to make it so you don't have to have all this duplicate code. There's a way to do this where the fetch funcitononly exists once, and you pass into it the player's name
//Also figure out how to make it so that the same player isnt generated twice
