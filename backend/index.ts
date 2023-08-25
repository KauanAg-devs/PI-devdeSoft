import express from 'express'
import run from './models/db/db.conn'
import userModel from './models/db/db.models'
import Router from './routes/api.routes'
const app = express()

const PORT = 5000
run()
 .then(()=>{
    console.log(`database loading...`)
    app.use(Router)
    app.listen(PORT, ()=>console.log(`server loading on PORT ${PORT}`))
 })