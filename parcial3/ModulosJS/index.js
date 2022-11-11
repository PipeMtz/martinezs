/* const modulo = require("./modules/module.js"); */
import{cuadrado} from './modules/module.js';

/* console.log(modulo.cuadrado(2)); */


const btnLlamar = document.querySelector("#btnCall");
const texto = document.querySelector("#textInput");
const changingP = document.querySelector("#parrafo");


btnLlamar.addEventListener("click",()=>{
    
    changingP.innerHTML = cuadrado(texto.value);

})




