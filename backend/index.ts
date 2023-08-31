import express from 'express'
import run from './models/db/db.conn'
import Router from './routes/api.routes'
import cors from 'cors'
const app = express()
const PORT = 5000
app.use(cors())
app.use(express.json())
 
run()
 .then(()=>{
    console.log(`database loading...`)
    app.use(Router)
    app.listen(PORT, ()=>console.log(`server loading on PORT ${PORT}`))
 })