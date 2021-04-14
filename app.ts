import express, { Application } from 'express'
import mongoose from 'mongoose'
import { Routes } from './routes/routes'

const mongoUrl = 'mongodb://localhost:27017/movies'
const serverPort = 2020


const express_app : Application = express()
express_app.use(express.json())

mongoose.connect(mongoUrl)
mongoose.connection.on('connected', ()=> {
    console.log("Database Connection Established")
})

const route = new Routes()
route.routes(express_app)

express_app.listen(serverPort, ()=>{
    console.log(`Server started listening on ${serverPort}`)
})


