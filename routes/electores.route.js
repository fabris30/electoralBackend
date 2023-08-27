import { Router } from "express";
import { getElectores, createElectores } from "../controllers/electores.controller.js";
import {requireToken} from "../middlewares/requireToken.js";

const router = Router();

// get 

router.get('/', requireToken, getElectores);
router.post('/', requireToken, createElectores);

export default router;