import { User } from "../models/User.js";


export const login= async (req, res) => {
         
  try {
    const {username, password} = req.body;
    let user = await User.findOne({username});
    if(!user)
    return res.status(403).json({error: "no existe este usuario"});

    const respuestaPassword = await user.comparePassword(password)
    if(!respuestaPassword)
    return res.status(403).json({error: "contraseña incorrecta"});

    return res.json({ok: "login"});

  } catch (error) {
    console.log(error);
  }
        
  }

  export const registro= async (req, res) => {
     
const {username, password} = req.body;
try {

  const user =new User({username, password});
  await user.save()
  return res.json({ok: true})

} catch (error) {
  console.log(error);
}
    

  };