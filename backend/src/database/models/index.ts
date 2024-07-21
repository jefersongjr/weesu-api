import config from '../config/config';
import { Sequelize } from 'sequelize';
import pg from 'pg';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in environment variables.');
}

const sequelize = new Sequelize({
  dialect: 'postgres',
  dialectModule: pg,
  ...config,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

export default sequelize;
