import { sequelize } from "../sequelize";

export async function db_connection() {
  try {
    await sequelize.authenticate();
    console.log(`Connection has been established successfully!`);
  } catch (err) {
    console.error("Unable to connect to the database: ", err);
  }
}
