import { Router } from 'express'

const router = Router()

router.get('/',(req,res)=>{
    res.send('Bienvenido al inicio.')
    })
    .post('/login',(req,res)=>{
        const user = req.body.user
        const password = req.body.password
        if(user == 'admin' && password == 'admin'){
            res.status(201).json({message:'Admin logueado.'})
        }
        else{
            res.status(401).json({messageError: 'Unauthorized.'})
        }
    })

export default router