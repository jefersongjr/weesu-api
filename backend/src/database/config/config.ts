import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT),
  dialect: 'postgres',
  logging: false,
};

module.exports = config;
