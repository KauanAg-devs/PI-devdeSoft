import mongoose, { Schema } from "mongoose";

mongoose.model('myColl', new Schema({
    name: String,
    password: String
}))