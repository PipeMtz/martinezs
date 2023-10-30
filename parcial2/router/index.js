import express from 'express'
import router from './routes.js'

const app = express()

app.use(express.json())
    .use('/',router)
    .listen(3000, ()=>{
        console.log('Server listening on port 8000')
    })

