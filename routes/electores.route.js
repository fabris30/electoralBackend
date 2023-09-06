import { Router } from "express";
import { getElectores, createElectores, buscarCedula, removeElector, editarElector, filtro, editarGrupo } from "../controllers/electores.controller.js";
import {requireToken} from "../middlewares/requireToken.js";
import { bodyElectoresValidator } from "../middlewares/validatorManager.js";

const router = Router();

// get 

router.get('/',requireToken, getElectores);
router.post('/', requireToken, bodyElectoresValidator, createElectores);
router.get('/buscarcc', requireToken, buscarCedula);
router.delete('/eliminar', requireToken, removeElector);
router.put('/editar', requireToken,editarElector);
router.get('/filtro', requireToken,filtro);
router.put('/grupo', requireToken, editarGrupo);
export default router; 