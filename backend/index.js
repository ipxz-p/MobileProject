import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
app.use(cors({credentials: true}))
app.use('/', (req, res)=>{
    res.send("GGEZ")
})
app.listen(3000, ()=>{
    console.log("Runing");
})
