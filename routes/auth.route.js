import {Router}  from "express";
import { login, registro } from "../controllers/aunth.controller.js";
import { body } from "express-validator";
import { validationResultExpess } from "../middlewares/validationResultExpress.js";
const router = Router();

router.get(
    '/login', 
       [ 
         body("username", "Usuario Incorrecto").trim(),
         body ("password", "Contraseña incorrecta").trim(),
       ],
     validationResultExpess,
     login);

router.post(
    '/registro',
      [ 
          body("username", "Usuario Incorrecto").trim(),
          body ("password", "Contraseña incorrecta").trim(),
      ],
       validationResultExpess,
       registro
     );

export default router;