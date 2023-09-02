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
      const elector = await Electores.findOne({ cedula: cedula });

      if(elector){
        res.status(403).json({error: "Ya esta cedula esta registrada"});
      }else{
         const electores =new Electores({cedula, nombres, apellidos, lugar, mesa, direccion, telefono, grupo});
        await electores.save()

         return res.json({msg: "Registro Exitoso"});
      }
    
       
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
      const electores = await Electores.findOne({ cedula: cedulaBuscar });
  
      if (electores) {
        res.json(electores);
      } else {
        res.json({ msg: 'Cedula no existe en la base de datos' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };

  //buscar por varios parametros
export const filtro = async (req, res) => {
    
  const { grupo, lugar, mesa } = req.query;
    console.log(req.query)
  try {
    
    let query = {};

    if (grupo) {
      query.grupo = grupo;
    }

    if (lugar) {
      query.lugar = { $regex: lugar, $options: 'i' };
    }

    if (mesa) {
      query.mesa = mesa;
    }
    const electores = await Electores.find(query);
    res.json({electores});

  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
  };

