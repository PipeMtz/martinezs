// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import multer from "multer";

// const folder = "./images/";
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, folder);
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// const app = express();
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/formulario', upload.single('archivo'), (req, res) => {
//   if (req.body == null) {
//     res.statusCode = 404;
//     res.setHeader("Content-type", "text/html");
//     res.send("<h1>Error 404</h1>");
//   } else {
//     console.log(req.body);
//     console.log(`Se ha recibido el archivo ${req.file.originalname}`);
//     console.log(`Se ha recibido el formulario: ` + JSON.stringify(req.body));
//     res.statusCode = 200;
//     res.setHeader("Content-type", "text/html");
//     const { nombre, apellido } = req.body;
//     res.send(`<h1>${nombre} ${apellido} welcome.</h1>`);
//   }
// });

// app.listen(8000, () => {
//   console.log("Servidor escuchando puerto 8000");
// });



const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");

const folder = path.join(__dirname, '/images/');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, folder);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/formulario", upload.single('img'), (req, res) => {
  if (req.body == null) {
    res.statusCode = 404;
    res.setHeader("Content-type", "text/html");
    res.send("<h1>Error 404</h1>");
  } else {
    console.log(req.body);
    console.log(`Se ha recibido el archivo ${req.file.originalname}`);
    console.log(`Se ha recibido el formulario: ` + JSON.stringify(req.body));
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    const { nombre, apellido } = req.body;
    res.send(`<h1>${nombre} ${apellido} welcome.</h1>`);
  }
});

app.listen(8000, () => {
  console.log("Servidor escuchando puerto 8000");
});
