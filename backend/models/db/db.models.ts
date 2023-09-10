import mongoose, { Schema } from "mongoose";

export default mongoose.model('myColl', new Schema({
    name: String,
    password: String
}))