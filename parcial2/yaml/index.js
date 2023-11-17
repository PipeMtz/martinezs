//npm i yaml
const yaml = require('yaml');
const fs = require('fs');
const path = require('path');

const archivoObj = fs.readFileSync(path.join(__dirname,'/archivosyaml/object.yml'),'utf8');
const valorObj = yaml.parse(archivoObj);
console.table(valorObj);

const archivoArr = fs.readFileSync(path.join(__dirname,'/archivosyaml/array.yml'),'utf8');
const valorArr = yaml.parse(archivoArr);
console.table(valorArr);
