import express from "express";

const server = express();

server
  .use(express.json())
  .get("/alumnos/:carrera", (req, res) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);

    res.send("Servidor express contestando GET");
  })
  .post("/alumnos", (req, res) => {
    //res.send("Servidor express contestando GET");
    const {nombre} = req.body
    res.send(nombre)
  })
  .listen(8000, (req, res) => {
    console.log("El servidor express escuchando");
  });






  
