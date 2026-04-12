// Extraemos la configuración que tenemos en app.
import app from "./app.js";
// Extraemos la configuración del module de sequelize
import { sequelize } from "./dataBase/dataBase.js";

import './models/usuarios.models.js';
import './models/pqr.models.js';
import './models/tipoPqr.models.js';

const PORT = 3000;

app.listen(PORT);

async function main() {
  try {
    await sequelize.sync({ force: false });
    console.log("Connection has been established successfully.");

    console.log(`Servidor conectado al puerto http://localhost: ${3000}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();