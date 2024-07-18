/* eslint-disable @typescript-eslint/no-var-requires */
import { Sequelize } from 'sequelize';
const config = require('../config/config'); // Assumindo que o arquivo config.ts está configurado como você mostrou

const sequelize = new Sequelize(config);

export default sequelize;
