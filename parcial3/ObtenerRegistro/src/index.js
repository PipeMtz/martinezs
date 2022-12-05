const numero = document.querySelector("#numero");
const btnCalcular = document.querySelector("#btnInput");
const resul = document.querySelector("#resultadoCalculo");

//

const inputId = document.querySelector("#numId");
const inputNombre = document.querySelector("#nombre");
const btnLoad = document.querySelector("#Load");

var resultado = 0;

import { cuadrado } from "./module.js";
//import Swal from 'sweetalert2';

btnCalcular.addEventListener("click", () => {
  resultado = cuadrado(numero.value);

  resul.innerHTML = resultado;
});

///////
btnLoad.addEventListener("click", async () => {
  let respuesta = await fetch("GetRegistro.php");
  let dato = await respuesta.json();
  inputId.value = dato.id;
  inputNombre.value = dato.nombre;
});

/* btnLoad.addEventListener("click", ( )=>{
  fetch('GetRegistro.php').then(respuesta=>respuesta.json()).then(dato=>displayCampos(dato))

}) */

function displayCampos(reg) {
  inputId.value = reg.id;
  inputNombre.value = reg.id;
}

/* Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})
 */
