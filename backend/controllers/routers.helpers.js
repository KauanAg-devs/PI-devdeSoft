"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crud = void 0;
const db_models_1 = __importDefault(require("../models/db/db.models"));
class Crud {
    async read(name) {
        return db_models_1.default.findOne({ name: name });
    }
    async post(user) {
        return db_models_1.default.create(user);
    }
    async put(user) {
        return db_models_1.default.findOneAndUpdate({ name: user.oldName, password: user.oldPassword }, { name: user.name, password: user.password }, { returnDocument: 'after' });
    }
    async delete(user) {
        return db_models_1.default.findOneAndDelete(user);
    }
}
exports.Crud = Crud;
