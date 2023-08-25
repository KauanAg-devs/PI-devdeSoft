import express from 'express'
import { Crud } from '../controllers/routers.helpers'
const Router = express.Router()
 const apiCrud = new Crud()
Router.get('/api', (req,res)=>{
 apiCrud.post({name: req.query.name as string, password: req.query.password as string})
})
  
Router.post('/api', (req,res)=>{

})

Router.delete('/api', (req,res)=>{

})

Router.put('/api', (req,res)=>{

})


export default Router