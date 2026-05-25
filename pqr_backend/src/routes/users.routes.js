import { Router } from 'express';
import { getUsuarios, createUsuario, getUsuarioId, actualizarUsuario } from '../controllers/users.crontrollers.js'

const router = Router();

router.get('/users', getUsuarios); // Para buscar todos los usuarios
router.get('/users/:id', getUsuarioId); // Para buscar un usuario con el id
router.post('/users', createUsuario); // Para crear un nuevo usuario
router.put('/users/:id', actualizarUsuario); // Para actualizar un usuario con el id
// router.delete('users/:id') // Para eliminar un solo usuario con el idx

export default router;
