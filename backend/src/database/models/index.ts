import * as pg from 'pg';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://admin:admin@localhost:5432/mydb', {
  dialect: 'postgres',
  dialectModule: pg,
});

export default sequelize;