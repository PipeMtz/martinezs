var p;

document.getElementById("btn").addEventListener("click", getFunction());

function getFunction(){

    fetch("localhost:8000/alumnos/sistemas")
    .then(response => response.json())
    .then(data => {
        document.getElementById("pGet").innerHTML = data;
    })
    .catch(err => console.error(err));   



}

  