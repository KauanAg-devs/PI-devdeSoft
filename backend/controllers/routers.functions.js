"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routers_helpers_1 = require("../controllers/routers.helpers");
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = require("passport-local");
const db_models_1 = __importDefault(require("../models/db/db.models"));
const apiCrud = new routers_helpers_1.Crud();
function jsonResponse(res, user, message, httpOK, httpError) {
    res
        .status(user ? httpOK : httpError)
        .json({ message: user ?? message });
}
passport_1.default.use(new passport_local_1.Strategy((username, password, done) => {
    if (username && password) {
        db_models_1.default.findOne({ name: username }, (err, user) => {
            console.log(user);
            done(null, user);
        });
    }
}));
class crudHandler {
    async getHandler(req, res) {
        passport_1.default.authenticate(() => {
        });
        const { name } = req.params;
        const user = await apiCrud.read(name);
        jsonResponse(res, user, `user not found \n value: ${user}`, 200, 404);
    }
    async deleteHandler(req, res) {
        const { name, password } = req.body;
        let user;
        if (name && password)
            user = await apiCrud.delete({ name, password });
        jsonResponse(res, user, `user not found \n value: ${user}`, 200, 404);
    }
    async postHandler(req, res) {
        const { name, password } = req.body;
        var user;
        if (name && password && user != '' && password != '')
            user = await apiCrud.post({ name, password });
        jsonResponse(res, user, `user wasnt accepted \n value: ${user}.`, 200, 406);
    }
    async putHandler(req, res) {
        const { oldName, oldPassword, name, password } = req.body;
        let user;
        if (name && password && oldName && oldPassword)
            user = await apiCrud.put({ oldName, oldPassword, name, password });
        jsonResponse(res, user, `user doesn't exists ${user}`, 200, 404);
    }
}
exports.default = crudHandler;
