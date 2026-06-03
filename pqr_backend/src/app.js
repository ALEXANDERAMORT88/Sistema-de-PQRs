// En este archivo lo que haremos es hacer las configuraciones y la construción necesarias para la aplicación, como va a funcionar nuestra API.
import express from 'express';
import usersRoutes  from './routes/users.routes.js';
import pqrsRoutes from './routes/pqr.routes.js';

// Inicializamos, creando una instancia y así configurar, crear rutas, hacer solicitudes.
 const app = express();

 // Middleware para entender JSON.
 app.use(express.json());
 // 👇 aquí conectamos las rutas
app.use(usersRoutes);
app.use(pqrsRoutes);

 export default app;