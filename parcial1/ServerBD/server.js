import express from "express";
import mysql from "mysql2";
import cors from "cors";

import { createPool } from "mysql2/promise";
const server = express();

server.use(express.json());
server.use(cors());
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

server.get("/alumnos/:id", (req, res) => {
  // const {id} = req.params.id;

  var query = `SELECT * FROM Nombres WHERE idNombres = ${req.params.id}`;
  console.log(query);
  connection.query(query, function (err, results, fields) {
    // console.log(results); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
    res.json(results);
  });
});
server.get("/fill", (req, res) => {
  // const {id} = req.params.id;

  var query = `SELECT * FROM Nombres`;
  console.log(query);
  connection.query(query, function (err, results, fields) {
    // console.log(results); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available
    res.json(results);
  });
});

server
  .post("/alumnos/", (req, res) => {
    var query = `insert into sys.Nombres(Nombre) values ("${req.body.name}");`;
    console.log(query);
    connection.query(query, function (err, results, fields) {
      // console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available
      res.json(results);
    });
  })
  .listen(8000, (req, res) => {
    console.log("El servidor express escuchando");
  });

server
  .post("/alumnos/update", (req, res) => {
    var query = `update sys.Nombres set Nombre =  "${req.body.name}" where idNombres = ${req.body.id};`;
    console.log(query);
    connection.query(query, function (err, results, fields) {
      // console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available
      res.json(results);
    });
  })


  server
  .delete("/alumnos/delete", (req, res) => {
   
    var query = `delete from sys.Nombres where idNombres = ${req.body.id}`;
    
    console.log(query);
    connection.query(query, function (err, results, fields) {
      // console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available
      res.json(results);
    });
  })
