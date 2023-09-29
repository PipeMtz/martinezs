import express from "express";
import cors from "cors";
import expressBasicAuth from "express-basic-auth";
const server = express();
const userlogin = "admin";
const password = "1234";

server.use(express.json());
server.use(cors());
server.use(
  expressBasicAuth({
    users: { admin: "1234" },
  })
);

server
  .get("/alumnos/:carrera", (req, res) => {
    // console.log(req.params);
    // console.log(req.query);
    // console.log(req.body);
    fetch("https://api.github.com/users/PipeMtz/repos", {
      headers: {
        Authentication: `Bearer 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`,
      },
    })
      .then((resp) => resp.json())
      .then((json) => console.log(JSON.stringify(json)));

    console.log("Login exitoso");
    res.send(`Login exitoso: ${userlogin}`);
  })
  .post("/alumnos", (req, res) => {
    //res.send("Servidor express contestando GET");
    const { nombre } = req.body;
    res.send(nombre);
  })
  .listen(8000, (req, res) => {
    console.log("El servidor express escuchando");
  });
