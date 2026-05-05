import { Router } from 'express';
import { getUsuarios, createUsuario } from '../controllers/users.crontrollers.js'

const router = Router();

router.get('/users', getUsuarios); // Para buscar todos los usuarios
// router.get('/users/:id'); // Para buscar un usuario con el id
router.post('/users', createUsuario); // Para crear un nuevo usuario
// router.put('/users/:id'); // Para actualizar un usuario con el id
// router.delete('users/:id') // Para eliminar un solo usuario con el idx

export default router;
