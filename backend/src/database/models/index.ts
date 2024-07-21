import { Sequelize } from 'sequelize';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { DATABASE_URL, PGUSER, PGPASSWORD, PGDATABASE, PGHOST, PGPORT } =
  process.env;

const isProduction = !!DATABASE_URL;

const sequelize = isProduction
  ? new Sequelize(DATABASE_URL, {
      dialect: 'postgres',
      dialectModule: pg,
      logging: false,
    })
  : new Sequelize(PGDATABASE!, PGUSER!, PGPASSWORD, {
      host: PGHOST,
      port: Number(PGPORT),
      dialect: 'postgres',
      dialectModule: pg,
      logging: false,
    });

export default sequelize;
