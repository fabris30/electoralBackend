import { validationResult, body} from "express-validator";


export const validationResultExpress = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
};

export const bodyLoginValidator = [ 
    body("username", "Usuario Incorrecto").trim(),
    body ("password", "Contraseña incorrecta").trim(),

     validationResultExpress
  ]

  export const bodyRegisterValidator = [ 
    body("username", "Usuario Incorrecto").trim(),
    body ("password", "Contraseña incorrecta").trim(),

     validationResultExpress
  ]
 