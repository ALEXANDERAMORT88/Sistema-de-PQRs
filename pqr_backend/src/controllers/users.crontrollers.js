import { Usuarios } from "../models/users.models.js";

// Llamar a todos los clientes
export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuarios.findAll();
    res.json(usuarios);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Llamar a un Usuario con su respectivo ID
export const getUsuarioId = async (req, res) => {
  try {
    const { id } = req.params;
    const usuariosId = await Usuarios.findOne({
      where: {
        id,
      },
    });

    if (!usuariosId) {
      return res.status(400).json({ message: "Usuario no existe ❌" });
    }

    res.json(usuariosId);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Crear nuevo usuario
export const createUsuario = async (req, res) => {
  const {
    tipo_documento,
    numero_documento,
    nombres,
    apellidos,
    correo,
    telefono,
    contraseña,
  } = req.body;

  try {
    const newUsuario = await Usuarios.create({
      tipo_documento,
      numero_documento,
      nombres,
      apellidos,
      correo,
      telefono,
      contraseña,
    });

    res.json(newUsuario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Actualizar datos de los usuarios creados.
export const actualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      tipo_documento,
      numero_documento,
      nombres,
      apellidos,
      correo,
      telefono,
      contraseña,
    } = req.body;
    const usuarios = await Usuarios.findByPk(id);
    usuarios.tipo_documento = tipo_documento;
    usuarios.numero_documento = numero_documento;
    usuarios.nombres = nombres;
    usuarios.apellidos = apellidos;
    usuarios.correo = correo;
    usuarios.telefono = telefono;
    usuarios.contraseña = contraseña;
    await usuarios.save();
    res.json(usuarios);
  } catch (error) {
    return res.status(500).json({ message: error.message});
  }
};
