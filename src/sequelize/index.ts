import { Sequelize } from "sequelize";

// const DATABASE_NAME = process.env.DATABASE_NAME as string;
// const DATABASE_USERNAME = process.env.DATABASE_USERNAME as string;
// const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD as string;
// const DATABASE_HOSTNAME = process.env.DATABASE_HOSTNAME as string;
const DATABASE_URL = process.env.DATABASE_URL as string;

export const sequelize = new Sequelize(DATABASE_URL);
