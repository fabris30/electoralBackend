import { User } from "../models/User.js";
import jwt from 'jsonwebtoken';
import { generateRefreshToken, generateToken } from "../utils/tokenManager.js";

export const login= async (req, res) => {
         
  try {
    const {username, password} = req.body;
    console.log(username, password)
    let user = await User.findOne({username});
    if(!user)
    return res.status(403).json({error: "no existe este usuario"});

    const respuestaPassword = await user.comparePassword(password)
    if(!respuestaPassword)
    return res.status(403).json({error: "contraseña incorrecta"});
  
    // generar token
    const {token, expiresIn} = generateToken(user.id);
    generateRefreshToken(user.id, res);
    return res.json({token, expiresIn});
   
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
  export const infoUser = async (req, res) => {

    try {

      const user = await User.findById(req.uid).lean();
      res.json({username:user.username, uid: user.id});

    } catch (error) {
      return res.status(500).json({error: "error de server"});
    }
    
  };

  export const refreshToken = (req, res) => {
    try {
        const { token, expiresIn } = generateToken(req.uid);
        return res.json({ token, expiresIn });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "error de server" });
    }
};
export const logout = (req, res) => {
  res.clearCookie("refreshToken");
  res.json({ ok: true });
};