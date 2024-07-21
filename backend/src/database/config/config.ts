import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST || 'db',
  port: Number(process.env.PGPORT),
  dialect: 'postgres',
  logging: false,
};

export default config;
