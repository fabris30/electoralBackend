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
     direccion:{
        type: String,
        required: false,
        trim: true
     },
      telefono:{
      type: String,
      required: false,
      trim: true
   },
   grupo:{
      type: Boolean,
      required: false,
      trim: true
   }

});
export const Electores=  mongoose.model('electores', electoresSchema);