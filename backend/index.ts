import express from 'express'
import run from './models/db/db.conn'
import Router from './routes/api.routes'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const PORT = process.env.PORT ?? 3000
app.use(cors())
app.use(express.json())
 
run()
 .then(()=>{
    console.log(`database loading...`)
    app.use(Router)
    app.listen(PORT, ()=>console.log(`server loading on PORT ${PORT}`))
 })