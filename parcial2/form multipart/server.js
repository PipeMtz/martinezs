import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import multer from "multer";
// import showImage from './index'

const folder = path.join('./images/')
const storage = multer.diskStorage({
  destination: function(req,file,cb) {cb(null, folder)},
  filename: function(req,file,cb) {cb(null, file.originalname)},
})

const upload = multer({storage: storage})

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.single('archivo'))

app.post("/formulario", (req, res) => {
  //const {nombre} = req.body
  if (req.body == null) {
    res.statusCode = 404;
    res.setHeader("Content-type", "text/html");
    res.send("<h1>Error 404</h1>");
} else {
    console.log(req.body);
    console.log(`Se ha recibido el archivo ${req.file.originalname}`);
    console.log(`Se ha recibido el formulario: `+JSON.stringify(req.body))
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

