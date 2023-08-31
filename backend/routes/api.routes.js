"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers_functions_1 = __importDefault(require("../controllers/routers.functions"));
const crud = new routers_functions_1.default();
const Router = express_1.default.Router();
Router.get('/api/:name', crud.getHandler);
Router.post('/api', crud.postHandler);
Router.delete('/api', crud.deleteHandler);
Router.put('/api', crud.putHandler);
exports.default = Router;
