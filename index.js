import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mailRouter from './Routers/mail.router.js'

dotenv.config();

const app=express();
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).send("App is Running")
    console.log("App is Running")
})

app.use("/mail", mailRouter)

app.listen(process.env.port, ()=>{
    console.log(`Server is running on port ${process.env.port}`)
})