import joi from 'joi'
import express from 'express'

const app = express()

app.use(express.json())
    .get('/',(req,res)=>{
        res.send('')
    })
    .post('/auth',(req,res)=>{
        const {error,value} = schema.validate(req.body)
        if(error){
            res.status(400).json({
                error: error.details[0].message
            })
        }else{
            res.json({
                message: `Validado correctamente: ${value.nombre} ${value.edad} ${value.email}`
            })
        }
    })
    .listen(3000,()=>{
        console.log('Server on port 3000')
    })

const schema = joi.object({
    nombre: joi.string().required(),
    edad: joi.number().required(),
    email: joi.string().email().required(),
})

const data = {
    nombre: "Juan",
    edad: 25,
    email: "juanec.com"
}

