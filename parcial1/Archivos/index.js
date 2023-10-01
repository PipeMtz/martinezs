const fsc = require('fs');
const path = require('path');
const {jsPDF} = require('jspdf');

fsc.writeFile(path.join(__dirname,'archivo.txt'),"archivo creado api callback",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Archivo creado con el api fs callback")
    }
})

//installation jspdf packet
const doc = new jsPDF();
doc.text("Hello world!",10,10);
doc.save(path.join(__dirname,"a4.pdf"));

