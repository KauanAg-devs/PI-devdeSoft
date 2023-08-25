import express from 'express'
import { Crud } from '../controllers/routers.helpers'
const Router = express.Router()
 const apiCrud = new Crud()
Router.get('/api', async (req,res)=>{
 const user = await apiCrud.post({name: req.query.name as string, password: req.query.password as string})
 res.status(200).json({message: user})
})
  
Router.post('/api', (req,res)=>{

})

Router.delete('/api', (req,res)=>{

})

Router.put('/api', (req,res)=>{

})


export default Router