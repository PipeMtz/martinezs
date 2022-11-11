const numero = document.querySelector("#numero");
const btnCalcular = document.querySelector("#btnInput");
const resul = document.querySelector("#resultadoCalculo");

var resultado = 0;

import { cuadrado } from "./module.js";
import Swal from 'sweetalert2';

btnCalcular.addEventListener("click", () => {
  resultado = cuadrado(numero.value);

  resul.innerHTML = resultado;
});

Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})
