/* const { ajax } = require("jquery"); */


window.onload = function(){

    document.querySelector(".request").addEventListener("click",pedirHeader);
    const returnHeader = document.querySelector(".return").addEventListener("click",iniciarHeader);

    function pedirHeader(){
        
        var solicitud = new XMLHttpRequest();

        solicitud.onreadystatechange = function(){
            if(solicitud.readyState == 4 && solicitud.status == 200){
                document.querySelector(".detalles").innerHTML = solicitud.responseText;
            }
        }

        solicitud.open("GET","details.txt",true);
        solicitud.send();
    }
    function iniciarHeader(){
        document.querySelector(".detalles").innerHTML="<p>Detalles</p>";
    }

}

/* function ajaxFunction(){

    var ajaxRequest = new XMLHttpRequest();

    ajaxFunction.onreadystatechange = function (){
        if(ajaxFunction.readyState == 4){
            document.querySelector(".header").innerHTML = ajaxRequest.responseText;
        }
    }

    ajaxRequest.open("GET","cargarControl.php",true);
    ajaxRequest.send();



} */

/* 
$(document).ready(function(){

$(".request").click(presionEnlace);

function presionEnlace(){
    var scriptPhp= $(this).attr("href");

    $(".detalles").load(scriptPhp);

    return false;
}

}) */





