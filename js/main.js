

const myOptions = {
    headers:{
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "6f8461f352mshc9bffc995f651a9p164ddejsn0d84ba56dfac"}
    }

fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=noname", myOptions)
.then((response) => response.json())
.then(res => {
    console.log("JSON HERE---->>>>",res)
    res.data.forEach((element, i) => {
        let pic = element.album.cover_big
        
        let song = element.preview

        console.log(pic, song)

        let frame = document.getElementsByClassName("frame")[0];

        // let holder = document.getElementsByClassName("holder")[0];

       
    
        //document.createElement("img")
        let source = document.createElement("source")

        let wrapper = document.createElement("video")
        wrapper.setAttribute('controls', 'controls');wrapper.appendChild(source)

        
        
        let holder = document.createElement("img");
             // puts in the section
        frame.appendChild(wrapper);
        frame.appendChild(holder); 
       source.src = song
        holder.src = pic

        
        
    });
    
});















//  document.querySelectorAll("img")
// document.querySelector("button").addEventListener('click', function(){
        
//     fetch('https://cors-anywhere.herokuapp.com/https://thesimpsonsquoteapi.glitch.me/quotes')
//     .then(res => res.json())
//     .then( response => {
//         console.log(response);
//         response.forEach(response => {
//         said = response.character;
       
//         } );
//         response.forEach(response => {
//             saying = response.quote;
//           document.querySelector("p").inntertext = `${saying}`
//         } );

//         response.forEach(response => {
//             img = response.image;
//             document.querySelector("img").src = img
//             } );
           
           

//             } );
            

// });



