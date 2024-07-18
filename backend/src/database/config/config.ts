require('dotenv/config');
const { Options } = require('sequelize');

const config: typeof Options = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3002,
  dialect: 'postgres',
  logging: false,
};

module.exports = config;
