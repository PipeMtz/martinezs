import express from "express";
import mysql from "mysql2";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { readFileSync } from "fs";

const app = express();

const sw = JSON.parse(readFileSync("./swagger.json", "utf8"));

const options = {
  definition: sw,
  apis: ["./server.js"],
};

const swaggerDOCS = swaggerJSDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDOCS));
app.get("/api-docs", swaggerUi.setup(swaggerDOCS));



app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: "monorail.proxy.rlwy.net",
  user: "root",
  database: "railway",
  password: "cAH1Cf-h3h-3h113HccC6a-AheGcc23E",
  port: '28136'
});

/**
 * @swagger
 * /alumnos/{id}:
 *   get:
 *     summary: Get information about a student.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the student.
 *     responses:
 *       200:
 *         description: Successful response with student information.
 */
app.get("/alumnos/:id", (req, res) => {
  var query = `SELECT * FROM Alumnos WHERE id = ${req.params.id}`;
  console.log(query);
  connection.query(query, function (err, results) {
    res.json(results);
  });
});

/**
 * @swagger
 * /fill:
 *   get:
 *     summary: Get a list of all students.
 *     responses:
 *       200:
 *         description: Successful response with a list of students.
 */
app.get("/fill", (req, res) => {
  var query = `SELECT * FROM Alumnos`;
  console.log(query);
  connection.query(query, function (err, results) {
    console.log(results);
    res.json(results);
  });
});

/**
 * @swagger
 * /alumnos:
 *   post:
 *     summary: Add a new student.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful response with the added student information.
 */
app.post("/alumnos/", (req, res) => {
  var query = `insert into Alumnos(Nombre) values ("${req.body.name}");`;
  console.log(query);
  connection.query(query, function (err, results) {
    res.json(results);
  });
});

/**
 * @swagger
 * /alumnos/update:
 *   post:
 *     summary: Update a student's information.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful response with the updated student information.
 */
app.post("/alumnos/update", (req, res) => {
  var query = `update Alumnos set Nombre =  "${req.body.name}" where id = ${req.body.id};`;
  console.log(query);
  connection.query(query, function (err, results) {
    res.json(results);
  });
});

/**
 * @swagger
 * /alumnos/delete:
 *   delete:
 *     summary: Delete a student.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Successful response after deleting the student.
 */
app.delete("/alumnos/delete", (req, res) => {
  var query = `delete from Alumnos where id = ${req.body.id}`;
  console.log(query);
  connection.query(query, function (err, results) {
    res.json(results);
  });
});

app.listen(8000, () => {
  console.log("El servidor express escuchando");
});
