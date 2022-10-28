

window.onload = function(){

    document.querySelector(".request").addEventListener("click",pedirHeader);
    const returnHeader = document.querySelector(".return").addEventListener("click",iniciarHeader);

    function pedirHeader(){
        
        var solicitud = new XMLHttpRequest();

        solicitud.onreadystatechange = function(){
            if(solicitud.readyState == 4 && solicitud.status == 200){
                document.querySelector(".header").innerHTML = solicitud.responseText;
            }
        }

        solicitud.open("GET","01_cargarArchivo.txt",true);
        solicitud.send();
    }
    function iniciarHeader(){
        document.querySelector(".header").innerHTML="<h2>Este es un header</h2>";
    }

}





