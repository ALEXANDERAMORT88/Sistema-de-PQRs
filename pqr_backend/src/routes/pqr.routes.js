import { Router } from "express";
import { getPqr, createPqr } from "../controllers/pqr.controllers.js";

const router = Router();

router.get('/pqrs', getPqr); // BUsqueda de todas PQRs creadas.
router.post('/pqrs', createPqr )// Crear una nueva PQRs.

export default router;