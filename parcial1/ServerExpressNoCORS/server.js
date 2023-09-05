import express from "express";

const server = express();


server.use(express.json())

server.get("/alumnos/:nombre",(req,res)=>{
  res.send("Ruta de nombres, esta peticion evita CORS")
})



 server.post("/alumnos", (req, res) => {
    //res.send("Servidor express contestando GET");
    const {nombre} = req.body
    res.send(nombre)
  })
  .listen(8000, (req, res) => {
    console.log("El servidor express escuchando");
  });


