import { config } from 'dotenv';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'postgres',
  ...config,
});

export default sequelize;
