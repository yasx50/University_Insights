import { urlencoded } from "express"
import express from "express"
const app = express()

app.use(urlencoded())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("working")
})

// imports of routes

import studentRouter from './routes/connect.routes.js'

app.use('/api/v1',studentRouter)

export default app
