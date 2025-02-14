import { urlencoded } from "express"
import express from "express"
const app = express()
import cors from 'cors'

app.use(urlencoded())
app.use(express.json())
app.use(cors({

    origin:"*"
}
))


app.get('/',(req,res)=>{
    res.send("working")
})

// imports of routes

import studentRouter from './routes/connect.routes.js'
import AppliedstudentRouter from './routes/appliedStudent.routes.js'

app.use('/api/v1/students', studentRouter);
app.use('/api/v1/applied-students', AppliedstudentRouter);

export default app
