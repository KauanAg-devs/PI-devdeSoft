import express from 'express'
import crudHandler from '../controllers/routers.functions';
const crud = new crudHandler()
const Router = express.Router()

Router.get('/api/:email', crud.getHandler);
Router.post('/api/post', crud.postHandler);
Router.delete('/api/delete', crud.deleteHandler);
Router.put('/api/put', crud.putHandler);
Router.delete('/api/deleteAll', crud.deleteAllHandler);


export default Router

