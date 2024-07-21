import config from '../config/config';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(config);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

export default sequelize;
