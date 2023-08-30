// import { pdf } from 'pdf/lib/pdf.js'; 
import {jsPDF} from "./node_modules/jspdf/dist/jspdf.node";

const doc = new jsPDF();

let pdfTitle;
let subject;
let quote;

document.getElementById("btnPdf").addEventListener("click", GenPdf());

function GenPdf(){
    console.log("boton clickeado");
    const texto = document.getElementById("textinput").value;
    console.log(texto);

    doc.text(texto, 10, 10);
    doc.save("a4.pdf");
    
}



