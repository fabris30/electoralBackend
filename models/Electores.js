import mongoose from "mongoose";

const electoresSchema = new mongoose.Schema({
 
    cedula:{
        type: String,
        required: true,
        unique: true,
        trim: true
     },
    nombres:{
        type: String,
        required: true,
        trim: true
     },
     apellidos:{
        type: String,
        required: true,
        trim: true
     },
     lugar:{
        type: String,
        required: true,
        trim: true
     },
     mesa:{
        type: String,
        required: true,
        trim: true
     },
     profesion:{
        type: String,
        required: false,
        trim: true
     }

});
export const Electores=  mongoose.model('electores', electoresSchema);