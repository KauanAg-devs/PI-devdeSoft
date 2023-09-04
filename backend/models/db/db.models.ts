import mongoose, { Schema } from "mongoose";

export default mongoose.model('myColl', new Schema({
    email: String,
    password: String
}))