import { Router } from 'express';
import { getUsuarios, createUsuario, getUsuarioId, actualizarUsuario, eliminarUsuario } from '../controllers/users.crontrollers.js'

const router = Router();

router.get('/users', getUsuarios); // Para buscar todos los usuarios
router.get('/users/:id', getUsuarioId); // Para buscar un usuario con el id
router.post('/users', createUsuario); // Para crear un nuevo usuario
router.put('/users/:id', actualizarUsuario); // Para actualizar un usuario con el id
router.delete('/users/:id', eliminarUsuario) // Para eliminar un solo usuario con el id

export default router;
