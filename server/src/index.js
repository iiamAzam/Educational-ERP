import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app = express()
mongoose.connect(process.env.URL).then(()=>{
        console.log("db is connected succefully")
}).catch(()=>{
    console.log("somthing went wrong")
})
app.use(cors)
app.listen(3000,()=>{
        console.log("connected")
})