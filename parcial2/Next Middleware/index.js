import express from "express";
import pc from "picocolors";

const app = express()

const logged = function (req, res, next) {
    try {
            console.log(req.body)
        if (req.body.isAuthenticated) {
            console.log(pc.green(`User ${req.body.username} is logged in`))
            next()
        }
        else {
            console.log(req.body)
            console.log(pc.red(`User ${req.body.username} is not logged in`))
            
            throw new Error("Not logged in")
            // res.status(401).send("User not logged in")
        }
    }
    catch (error) {
    // console.log(error)
    next(error)
    }
}

app.use(express.json())
    .use(logged)
    .post("/login", (req, res) => {
        res.send(`Welcome.`)
    })
    .use((err,req,res)=>{  //Manejador de errores
        res.status(400).json({"error":err.message})

    })
    .listen(3000, () => {
        console.log(pc.green("Server running on port 3000"))
    })