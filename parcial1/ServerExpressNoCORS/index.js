var p;

document.getElementById("btn").addEventListener("click", getFunction);

async function getFunction(){

    console.log("si jala el boton")
    

        const response = await fetch('http://localhost:8000/alumnos/sistemas')
        const data = await response.json()

        console.log(data)
    }





  