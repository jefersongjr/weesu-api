/* eslint-disable @typescript-eslint/no-var-requires */
import { Sequelize } from 'sequelize';
const config = require('../config/config');

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  ...config,
});

export default sequelize;
