import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
import {  validationResult , checkSchema} from 'express-validator'
import picocolors from 'picocolors'

const app = express()
const pc = picocolors

app.use(express.json())
    .use(cors())
    .use(bodyParser.urlencoded({ extended: true }))
    // .get('/user', query('user').notEmpty(), (req, res) => {
    //     const result = validationResult(req)
    //     if(result.isEmpty()){
    //         res.send(`Hola, ${req.query.user}`)
    //     }
    //     res.send({ messageError: result.array() })
    // })
    .post('/user', checkSchema({
        "usuario" : {isLength:{options: {min:5, max:10}}, messageError: "Usuario muy corto"},
        "edad" : {isNumeric: {errorMessage:"Edad debe ser numerica"}},
        "email": {isEmail: {errorMessage:"Debe ser email"}}
    }),(req,res) =>{
        const result = validationResult(req)
        if(result.isEmpty()){
            console.log(req.body)
            res.json({mensaje: 'Respuesta a peticion post'})
        }
        else{
            console.log(pc.red(req.body))
            console.log(pc.red(result))
            res.json(result)
        }
    })
    .listen(8000, () => {
        console.log(pc.green(`Server running on port 8000`))
    })
