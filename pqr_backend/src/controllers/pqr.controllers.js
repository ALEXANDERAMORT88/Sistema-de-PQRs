import { Pqr } from "../models/pqr.models.js";

// Llamar todas las PQR
export const getPqr = async (req, res) => {
  try {
    const pqrs = await Pqr.findAll();
    res.json(pqrs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPqr = async (req, res) => {
  const numeroRadicado = `PQR-${Date.now()}`;
  const {
    descripcion,
    fecha_creacion,
    estado,
    fecha_vencimiento,
  } = req.body;
  try {
    const newPqrs = await Pqr.create({
      numero_radicado: numeroRadicado,
      descripcion,
      fecha_creacion,
      estado,
      fecha_vencimiento,
    });
    res.json(newPqrs)
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
