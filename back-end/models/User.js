import {Schema, model} from "mongoose";

const userSchema = new Schema({
   name: String,
   email: {type:String, unique: true}, //O email tem que ser unico
   password: String,
})

export default model("User", userSchema)