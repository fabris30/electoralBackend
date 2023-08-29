import { Router } from "express";
import { requireToken } from "../middlewares/requireToken.js";
import { createConteo, editarConteo, getConteo, removeConteo } from "../controllers/conteo.controller.js";



const router = Router();

router.get('/', requireToken, getConteo);
router.post('/', requireToken, createConteo);
router.delete('/', requireToken, removeConteo );
router.put('/', requireToken, editarConteo);

export default router; 