import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/formulario", (req, res) => {
  //const {nombre} = req.body
  if (req.body == null) {
    res.statusCode = 404;
    res.setHeader("Content-type", "text/html");
    res.send("<h1>Error 404</h1>");
} else {
    console.log(req.body);
    res.statusCode = 200
    res.setHeader("Content-type", "text/html");
    const {nombre, apellido} = req.body
    res.send(`<h1>${nombre} ${apellido} welcome.</h1>`);
  }
  // res.send(nombre)
});

app.listen(8000, (req, res) => {
  console.log("Servidor escuchando puerto 8000");
});
