document.querySelector('button').addEventListener('click', carRun);

function carRun(){
let carSearch = document.querySelector('[placeholder = "Car Brand"]').value

let url = `https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/${carSearch}?format=json`

console.log(url);

fetch(url)
.then(res => res.json())
.then(data => {
  console.log(data);
  for(let i = 0; i < data.Results.length;i++){
  let li = document.createElement('li')
  li.innerText = data.Results[i].MakeName + " " + data.Results[i].VehicleTypeName;
  document.querySelector('.carList').appendChild(li);
  }
  // let carBrand = document.querySelector('.carMake').innerText = data.Results[0].MakeName + ;
  //
  // let carTypes = document.querySelector('.carList').innerHTML = data.Results.map(vehicle => `<li>${vehicle.VehicleTypeName}</li>`);
  //
  // console.log(data.Results.map(vehicle => vehicle.VehicleTypeName))
  //
  // // let array = []
  // //
  // // data.Results.forEach((item, i) => {
  // //   array.push(item.MakeId)
  // // });
  // // console.log(array);
  //
  // console.log(data.Results)
  // console.log(carBrand);

  })
}
