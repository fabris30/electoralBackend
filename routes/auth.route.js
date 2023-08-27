import {Router}  from "express";
import { infoUser, login, registro, refreshToken, logout } from "../controllers/aunth.controller.js";
import { body } from "express-validator";
import { validationResultExpess } from "../middlewares/validationResultExpress.js";
import { requireToken } from "../middlewares/requireToken.js";
import { requireRefreshToken } from "../middlewares/requireRefreshToken.js";
import { bodyLoginValidator,bodyRegisterValidator } from "../middlewares/validatorManager.js";
const router = Router();

router.get('/login',bodyLoginValidator,login);
router.post('/registro', bodyRegisterValidator, registro);     
router.get("/protected",requireToken ,infoUser);
router.get("/refresh",requireRefreshToken,refreshToken);
router.get("/logout", logout);

export default router; 