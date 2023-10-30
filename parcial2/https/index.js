import express from 'express'
import https from 'https'
import fs from 'fs'
import cors from 'cors'

const app = express()


const httpsOptions = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}

app.use(express.json())
    .use(express.urlencoded({extended: true}))
    .use(cors())
    .get('/', (_, res) => {
        res.send('Hey')
    })

https.createServer(httpsOptions, app).listen(3000, () => {
    console.log('Server started on port 3000')
})

