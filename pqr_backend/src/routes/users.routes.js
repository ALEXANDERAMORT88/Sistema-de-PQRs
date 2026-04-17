import { Router } from 'express';

const router = Router();

router.get('/users'); // Para buscar todos los usuarios
router.get('users/: id'); // Para buscar un usuario con el id
router.post('/users'); // Para crear un nuevo usuario
router.put('/users/: id'); // Para actualizar un usuario con el id
router.delete('users/:id') // Para eliminar un solo usuario con el id

export default router;
