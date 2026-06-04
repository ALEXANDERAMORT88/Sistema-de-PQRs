import { Router } from "express";
import { getPqr, getPqrId, getPqrByRadicado, createPqr } from "../controllers/pqr.controllers.js";

const router = Router();

router.get('/pqrs', getPqr); // Búsqueda de todas PQR creadas.
router.get('/pqrs/:id', getPqrId); // Búsqueda de PQR según su ID, configuración estará creada para administradores y backend.
router.get('/pqrs/radicado/:radicado', getPqrByRadicado); // Búsqueda de PQR con el número de radicado, configuración creada para usuarios.
router.post('/pqrs', createPqr ); // Crear una nueva PQR.

export default router;