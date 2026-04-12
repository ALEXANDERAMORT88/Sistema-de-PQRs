import { DataTypes } from "sequelize";
import { sequelize } from "../dataBase/dataBase.js";
import { TipoPqr } from "./tipoPqr.models.js";

export const Pqr = sequelize.define(
    "pqr",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true,
        },
        numero_radicado: {
            type: DataTypes.INTEGER,
        },
        descripcion: {
            type: DataTypes.STRING,
        },
        fecha_creacion: {
            type: DataTypes.DATE,
        },
        estado: {
            type: DataTypes.STRING,
        },
        fecha_vencimiento: {
            type: DataTypes.DATE,
        }
    }
)

TipoPqr.hasMany(Pqr, {
    foreignKey: 'tipoPqrId',
    sourceKey: 'id'
});

Pqr.belongsTo(TipoPqr, {
    foreignKey: 'tipoPqrId',
    targetKey: 'id'
});