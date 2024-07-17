'use strict';

import { QueryInterface } from 'sequelize';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    const saltRounds = 10;
    const hashedPassword1 = await bcrypt.hash(
      process.env.USERPASSWORD1 as string,
      saltRounds,
    );
    const hashedPassword2 = await bcrypt.hash(
      process.env.USERPASSWORD2 as string,
      saltRounds,
    );

    await queryInterface.bulkInsert('users', [
      {
        fullname: 'James Happer',
        password: hashedPassword1,
        email: 'jim_happer@ds.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullname: 'Dwight Schrute',
        password: hashedPassword2,
        email: 'ds_manager@dm.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {}, {});
  },
};
