const contenedor = document.querySelector(".contenedor");
const caja = document.querySelector(".caja");






$(document).ready(function(){
    $("#contmain").click(function(event){
        $(event.target.id).innerHTML("Evento delegacion");
     })
})