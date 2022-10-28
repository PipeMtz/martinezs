document.querySelector("#btnPeticion").addEventListener("click", function(){
    console.log("click");

    fetch("https://api.chucknorris.io/jokes/random")
        .then((respuesta)=> respuesta.json() )
            .then(datoJson => document.querySelector("#caja").innerText = datoJson.value + "\nPETICION POR FETCH");
})

//
document.querySelector("#btnPeticionJQ").addEventListener("click", function(){    
    $.getJSON("https://api.chucknorris.io/jokes/random", function(datoJson){
        document.querySelector("#caja").innerText = datoJson.value + "\nPETICION POR JQUERY";
    })
})