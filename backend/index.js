import express, { urlencoded } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import 'express-async-errors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js'

dotenv.config()
connectDB()
const PORT = process.env.PORT || 3000;
const app = express()
app.use(express.json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors({credentials: true}))

app.use("/auth", authRoute)

mongoose.connection.once("open", ()=>{
    console.log("Connected to DB");
    app.listen(PORT, () => console.log(`Server runing on port ${PORT}`))
})
mongoose.connection.on("error", err=>console.log(err))