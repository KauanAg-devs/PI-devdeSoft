import express from 'express'
import crudHandler from '../controllers/routers.functions';
const crud = new crudHandler()
const Router = express.Router()
import passport from 'passport'
import { Strategy } from 'passport-local';
import userModel from '../models/db/db.models';

passport.use(new Strategy((username,password, done)=>{
    if (username && password) {
      userModel.findOne({name: username}, (err: any, user: string)=>{
        console.log(user);
        
      })
    }
    
  
  }))

Router.get('/api/:name', passport.authenticate('local',{failureRedirect: '/api/post'}),crud.getHandler);
Router.post('/api/post', crud.postHandler);
Router.delete('/api', crud.deleteHandler);
Router.put('/api', crud.putHandler);


export default Router