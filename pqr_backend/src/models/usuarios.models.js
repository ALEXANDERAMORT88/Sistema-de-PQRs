import { DataTypes  } from "sequelize";
import { sequelize } from "../dataBase/dataBase.js";
import { Pqr } from "./pqr.models.js";
import { TipoPqr } from "./tipoPqr.models.js";

// Esqueme de la tabla para Usuarios
export const Usuarios = sequelize.define(
    "usuarios",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true,
        },
        tipo_documento: {
            type: DataTypes.STRING,
        },
        numero_documento: {
            type: DataTypes.STRING,
        },
        nombres: {
            type: DataTypes.STRING,
        },
        apellidos: {
            type: DataTypes.STRING,
        },
        correo: {
            type: DataTypes.STRING,
        },
        telefono: {
            type: DataTypes.STRING,
        },
        contraseña: {
            type: DataTypes.STRING,
        },
        fecha_registro: {
            type: DataTypes.DATE,
        }
    }
)

Usuarios.hasMany(Pqr, {
    foreignKey: 'usuariosId',
    sourceKey: 'id'
});

Pqr.belongsTo(Usuarios, {
    foreignKey: 'usuariosId',
    targetKey: 'id'
})

