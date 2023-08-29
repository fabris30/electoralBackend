import mongoose from "mongoose";

const conteoSchema = new mongoose.Schema({
   
    candidato:{
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
     votos:{
        type: Number,
        required: true,
        trim: true
     }

});
export const Conteo=  mongoose.model('conteo', conteoSchema);