const revealUser = document.querySelector('#reveal')


revealUser.addEventListener('click', function(){

  const userInput = document.querySelector('#userName').value


  fetch(`https://api.nationalize.io?name=${userInput}`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        console.log(response)


          let firstResult = document.querySelector("#countryRes")

          let nameMatched = response.name
          let countryName0 = response.country[0].country_id
          let countryName1 = response.country[1].country_id
          let countryName2 = response.country[2].country_id
          let probablyStat0 = response.country[0].probability
          let probablyStat1 = response.country[1].probability
          let probablyStat2 = response.country[2].probability

          firstResult.innerHTML = `${nameMatched} ${countryName0} ${countryName1} ${countryName2} ${probablyStat0} ${probablyStat1} ${probablyStat2}`




        fetch(`https://api.agify.io?name=${userInput}`)
            .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
            .then(response => {
              console.log(response)

              let secondResult = document.querySelector("#ageRes")

              let ageMatch = response.age

              secondResult.innerHTML = `${ageMatch}`

            })
            .catch(err => {
                console.log(`error ${err}`)
                alert("sorry, there are no results for your search")
            });

      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });
})

// for (let i = 0; i <= response.country.length; i++){
//   let firstResult = document.querySelector("#countryRes")
//   let secondResult = document.querySelector("#ageRes")
//   let countryName = response.country[i].country_id
//   let probablyStat = response.country[i].probability
//
//   firstResult.innerHTML = `${countryName} ${probablyStat}`
// }
// console.log(i)

// fetch("https://api.nationalize.io?name=michael")
//     .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//     .then(response => {
//       console.log(response)
//
//       fetch("https://api.agify.io?name=michael")
//           .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
//           .then(response => {
//             console.log(response)
//
//           })
//           .catch(err => {
//               console.log(`error ${err}`)
//               alert("sorry, there are no results for your search")
//           });
//
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//         alert("sorry, there are no results for your search")
//     });
