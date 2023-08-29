import { Conteo} from "../models/Conteo.js";

// consulta de datos GET
export const getConteo = async  (req, res) => {

    try {
       const conteo =  await Conteo.find();
         return res.json({conteo});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'error de servidor'});
    }
   
};
// creamos registro de conteo POST  
export const createConteo = async  (req, res) => {

    const {candidato, lugar, mesa, votos} = req.body;

    try {

        const conteo =new Conteo({candidato, lugar, mesa, votos});
        await conteo.save();

         return res.json({msg: "Registro Exitoso"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'error de servidor'});
    }
   
};
//eliminar registro de votos

export const removeConteo = async (req, res) => {
    const id = req.query.id;
  
    try {
      const conteo = await Conteo.deleteOne({ _id: id });
  
      if (conteo.deletedCount===1) {

        res.json({ msg: 'Eliminado con exito: ', id });
      } else {
        res.json({ msg: 'no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };
//actualizar

export const editarConteo = async (req, res) => {
    const id = req.query.id; 
    const datosactualizar = req.body;
   
    try {
    const conteo = await Conteo.updateOne({ _id: id },{ $set: datosactualizar });
    
        if (conteo.matchedCount===1) {
          res.json({ msg: 'Actualizacion exitosa' });
        } else {
          res.json({ msg: 'Actualizacion fallida' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
      }
    
     
};