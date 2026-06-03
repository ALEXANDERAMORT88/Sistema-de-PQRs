// Extraemos la configuración que tenemos en app.
import app from "./app.js";
// Extraemos la configuración del module de sequelize
import { sequelize } from "./dataBase/dataBase.js";

const PORT = 3000;

app.listen(PORT);

async function main() {
  try {
    await sequelize.sync({ force: false }); // Si se deja en true, esto elimina y recrea las tablas nuevamente borrando todos los datos de las tablas, por eso se debe de dejar en false. 
    console.log("Connection has been established successfully.");

    console.log(`Servidor conectado al puerto http://localhost:${PORT}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();