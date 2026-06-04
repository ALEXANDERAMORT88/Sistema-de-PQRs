import { Pqr } from "../models/pqr.models.js";

// Buscar todas las PQR
export const getPqr = async (req, res) => {
  try {
    const pqrs = await Pqr.findAll();
    res.json(pqrs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Buscar cada PQR con su ID, configuración para administradores y backend.
export const getPqrId = async (req, res) => {
  try {
    const { id } = req.params;
    const pqrId = await Pqr.findByPk(id);

    if (!pqrId) {
      return status(404).json({ message: "PQR no encontrada ❌" });
    }

    res.json(pqrId);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Buscar PQR con número de radicado, configuración para usuarios.
export const getPqrByRadicado = async (req, res) => {
  try {
    const { radicado } = req.params;

    const pqr = await Pqr.findOne({
      where: {
        numero_radicado: radicado,
      },
    });

    if (!pqr) {
      return res.status(500).json({ message: "PQR no encontrada" });
    }
    res.json(pqr);
    
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Crear una nueva PQR.
export const createPqr = async (req, res) => {
  const numeroRadicado = `PQR-${Date.now()}`;
  const { descripcion, fecha_creacion, estado, fecha_vencimiento } = req.body;
  try {
    const newPqrs = await Pqr.create({
      numero_radicado: numeroRadicado,
      descripcion,
      fecha_creacion,
      estado,
      fecha_vencimiento,
    });
    res.json(newPqrs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
