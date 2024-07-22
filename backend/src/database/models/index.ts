import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import pg from 'pg';

dotenv.config();

const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL!, {
  dialect: 'postgres',
  dialectModule: pg,
  logging: false,
});

export default sequelize;
