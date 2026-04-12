// Importamos el modulo de sequelize.
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    "databasepqr", 
    "root", 
    "aprendiendodb",
    {
        host: 'localhost',
        dialect: 'mariadb',
    },
);
