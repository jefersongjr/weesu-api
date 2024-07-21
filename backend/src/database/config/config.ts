import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.PGUSER || 'default_user',
  password: process.env.PGPASSWORD || 'default_password',
  database: process.env.PGDATABASE || 'default_db',
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT) || 5432,
  dialect: 'postgres',
  logging: false,
};

export default config;
