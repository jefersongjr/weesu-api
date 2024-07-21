import { config } from 'dotenv';
import * as pg from 'pg';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  dialectModule: pg,
  ...config,
});

export default sequelize;
