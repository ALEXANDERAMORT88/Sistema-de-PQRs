import { DataTypes } from "sequelize";
import { sequelize } from "../dataBase/dataBase.js";

export const TipoPqr = sequelize.define(
    "tipoPqr",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        tipo: {
            type: DataTypes.INTEGER,
        },
        tiempo_max_respuesta: {
            type: DataTypes.INTEGER,
        }
    }
)