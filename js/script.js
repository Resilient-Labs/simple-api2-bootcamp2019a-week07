function getActivity(){
    fetch(`http://www.boredapi.com/api/activity/`)
        .then(response => response.json())
        .then(data => {
            document.querySelector("h2").innerHTML = data.activity;
        })
}

document.querySelector("button").addEventListener("click", getActivity);
