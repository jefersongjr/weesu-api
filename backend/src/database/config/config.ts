import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  dialect: 'postgres',
  logging: false,
};

export default config;
