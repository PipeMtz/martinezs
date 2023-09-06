//import express from "express";
// var morgan = require('morgan')

// const server = express();

// server.use(express.json());

// server.get("/alumnos/:nombre", (req, res) => {
//   res.send("Ruta de nombres, esta peticion evita CORS");
// });

// server
//   .post("/alumnos", (req, res) => {
//     //res.send("Servidor express contestando GET");
//     const { nombre } = req.body;
//     res.send(nombre);
//   })
//   .listen(8000, (req, res) => {
//     console.log("El servidor express escuchando");
//   });

import express from 'express';
// import fs from 'fs';
import { createWriteStream } from 'fs/promises';
import morgan from 'morgan';
import path from 'path';
 
const app = express()
 
// create a write stream (in append mode)
var accessLogStream = createWriteStream(join(__dirname, 'access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
 
app.get('/', function (req, res) {
  res.send('hello, world!')
})
