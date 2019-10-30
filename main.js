document.querySelector("button").onclick = () => {
  let ran = String(Math.floor(Math.random()*1000));
  fetch(`https://www.anapioficeandfire.com/api/characters/${ran}`)
    .then(res => res.json())
    .then(response=> {
      console.log(response);
      let allTitles= "";
      for(let i =0;i<response.titles.length;i++){
        allTitles+=response.titles[i];
        if (i<response.titles.length-1){
          allTitles+= ", ";
        }
      }
      document.getElementById("number").textContent= String(response.books.length);
      document.getElementById("name").textContent = response.name;
      document.getElementById("gender").textContent = response.gender;
      document.getElementById("dob").textContent = response.born;
      document.getElementById("culture").textContent = response.culture;
      document.getElementById("died").textContent = response.died;
      document.getElementById("titles").textContent = allTitles;
    })
    .catch(err =>{
      console.log(`error ${err}`);
      alert('sorry, no results for your search')
    });
};
