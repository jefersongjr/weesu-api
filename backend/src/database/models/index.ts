import { config } from 'dotenv';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  ...config,
});

export default sequelize;
