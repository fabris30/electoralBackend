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

    const {cedula, nombres, apellidos, lugar, mesa, direccion, telefono, grupo} = req.body;

    try {

        const electores =new Electores({cedula, nombres, apellidos, lugar, mesa, direccion, telefono, grupo});
        await electores.save()

         return res.json({msg: "Registro Exitoso"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'error de servidor'});
    }
   
};


//eliminar un elector

export const removeElector = async (req, res) => {
    const cedulaBuscar = req.query.cedula;
  
    try {
      const elector = await Electores.deleteOne({ cedula: cedulaBuscar });
  
      if (elector.deletedCount===1) {

        res.json({ msg: 'Eliminado con exito: ', cedulaBuscar });
      } else {
        res.json({ msg: 'Cedula no encontrada' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };

//actualizar

export const editarElector = async (req, res) => {
    const id = req.query.id; 
    const datosactualizar = req.body;
   
    try {
    const elector = await Electores.updateOne({ _id: id },{ $set: datosactualizar });
    
        if (elector.matchedCount===1) {
          res.json({ msg: 'Actualizacion exitosa' });
        } else {
          res.json({ msg: 'Cedula no existe en la base de datos' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
      }
    
     
}

//buscar por cedula
export const buscarCedula = async (req, res) => {
    const cedulaBuscar = req.query.cedula; // Asumiendo que la cédula se pasa como parámetro de consulta
  
    try {
      const elector = await Electores.findOne({ cedula: cedulaBuscar });
  
      if (elector) {
        res.json(elector);
      } else {
        res.json({ msg: 'Cedula no existe en la base de datos' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };

  //buscar por varios parametros
export const filtro = async (req, res) => {
    const filtro = {
        lugar: 'rada',      // Nombre del producto a buscar (opcional)
        mesa: '4'   
      };
      Electores.find(filtro).toArray((err, electores) => {
        if (err) {
          console.error('Error al buscar productos:', err);
          return;
        }
    
        res.json(electores);
    
      });
  };

