import 'dotenv/config';
import { Sequelize, Options } from 'sequelize';
import pg from 'pg';

const useDatabaseUrl = !!process.env.DATABASE_URL;

const localConfig: Options = {
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  dialect: 'postgres',
  logging: false,
};

const sequelize = useDatabaseUrl
  ? new Sequelize(process.env.DATABASE_URL!, {
      dialect: 'postgres',
      dialectModule: pg,
      logging: false,
    })
  : new Sequelize(localConfig);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

export default sequelize;
