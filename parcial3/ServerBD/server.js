
import express from "express";
import mysql from "mysql2";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { readFileSync } from 'fs'
// import * from 'path'
import redoc from 'redoc-express'

const app = express();

// const optionsJson = readFileSync('./options.json', 'utf8')
// const readme = readFileSync('./README.md', 'utf8')
const sw = JSON.parse(readFileSync('./swagger.json', 'utf8'))

const options = {
  definition: sw,
  // definition: optionsJson,
  // description: readme,
  apis: ['./server.js'], // files containing annotations as above
};

const swaggerDOCS = swaggerJSDoc(options);

app.use('/api-docs', swaggerUi.serve)
app.get('/api-docs', swaggerUi.setup(swaggerDOCS));
/**
 * @swagger
 * /api-docs-json: 
 *   get:
 *     description: Returns swagger json
 *     responses:
 *       200:
 *         description: Success
 * 
 * 
 * */
app.get('/api-docs-json',(_,res) => {
  res.json(swaggerDOCS)
  })
/**
 * @swagger
 * /docs: 
 *   get:
 *     description: Redoc
 *     responses:
 *       200:
 *         description: Success
 * 
 * 
 * */
app.get(
    '/docs',
    redoc({
      title: 'API Docs',
      specUrl: '/api-docs-json',
      nonce: '', // <= it is optional,we can omit this key and value
      // we are now start supporting the redocOptions object
      // you can omit the options object if you don't need it
      // https://redocly.com/docs/api-reference-docs/configuration/functionality/
      redocOptions: {
        theme: {
          colors: {
            primary: {
              main: '#6EC5AB'
            }
          },
          typography: {
            fontFamily: `"museo-sans", 'Helvetica Neue', Helvetica, Arial, sans-serif`,
            fontSize: '15px',
            lineHeight: '1.5',
            code: {
              code: '#87E8C7',
              backgroundColor: '#4D4D4E'
            }
          },
          menu: {
            backgroundColor: '#ffffff'
          }
        }
      }
    })
  );
  
app.use(express.json());
app.use(cors());
// create the connection to database
// const connection = createPool({
//   host: 'containers-us-west-58.railway.app',
//   user: 'root',
//   password: '1O1KcNoGqkqjCdHD15ta',
//   port: '6672',
//   database: 'railway',

// });
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "sys",
  password: "password",
});


app.get("/alumnos/:id", (req, res) => {
  // const {id} = req.params.id;

  var query = `SELECT * FROM Nombres WHERE idNombres = ${req.params.id}`;
  console.log(query);
  connection.query(query, function (err, results) {
    // console.log(results); // results contains rows returned by app
    // console.log(fields); // fields contains extra meta data about results, if available
    res.json(results);
  });
});
/**
 * @swagger
 * /fill: 
 *   get:
 *     description: Returns all names
 *     responses:
 *       200:
 *         description: Success
 * 
 * 
 * */
app.get("/fill", (req, res) => {
  // const {id} = req.params.id;

  var query = `SELECT * FROM Nombres`;
  console.log(query);
  connection.query(query, function (err, results) {
    // console.log(results); // results contains rows returned by app
    // console.log(fields); // fields contains extra meta data about results, if available
    res.json(results);
  });
});

app
  .post("/alumnos/", (req, res) => {
    var query = `insert into sys.Nombres(Nombre) values ("${req.body.name}");`;
    console.log(query);
    connection.query(query, function (err, results) {
      // console.log(results); // results contains rows returned by app
      // console.log(fields); // fields contains extra meta data about results, if available
      res.json(results);
    });
  })
  .listen(8000, () => {
    console.log("El servidor express escuchando");
  });

app
  .post("/alumnos/update", (req, res) => {
    var query = `update sys.Nombres set Nombre =  "${req.body.name}" where idNombres = ${req.body.id};`;
    console.log(query);
    connection.query(query, function (err, results) {
      // console.log(results); // results contains rows returned by app
      // console.log(fields); // fields contains extra meta data about results, if available
      res.json(results);
    });
  })


  app
  .delete("/alumnos/delete", (req, res) => {
   
    var query = `delete from sys.Nombres where idNombres = ${req.body.id}`;
    
    console.log(query);
    connection.query(query, function (err, results) {
      // console.log(results); // results contains rows returned by app
      // console.log(fields); // fields contains extra meta data about results, if available
      res.json(results);
    });
  })