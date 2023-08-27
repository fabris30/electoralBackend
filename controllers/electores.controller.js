import { Electores } from "../models/Electores.js";

// consulta de datos GET
export const getElectores = async  (req, res) => {

    try {
       const electores =  await Electores.find();
         return res.json({electores});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'error de servidor'});
    }
   
};

// creamos un elector POST
export const createElectores = async  (req, res) => {

    const {cedula, nombres, apellidos, lugar, mesa, profesion} = req.body;

    try {

        const electores =new Electores({cedula, nombres, apellidos, lugar, mesa, profesion});
        await electores.save()

         return res.json({msg: "Registro Exitoso"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'error de servidor'});
    }
   
};
