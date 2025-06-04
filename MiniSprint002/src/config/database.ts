import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); //load variables from .env

// This file configures and establishes a connection to the PostgreSQL database using Sequelize
//so that sequalize can run queries easier without complex scripts
const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    dialect: 'postgres',
    logging: false,
  }
);

export default sequelize;
