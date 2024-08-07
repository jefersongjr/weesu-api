'use strict';
module.exports = {
  up: async (QueryInterface) => {
    await QueryInterface.bulkInsert('users', [
      {
        name: 'James Happer',
        password:
          '$2a$10$ArDq.X5jb4VG3Qc6yFacDuh6YIKDALK.wRG21dPEaEZj56HkqI1EO',
        // senha: senha
        email: 'jim_happer@ds.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dwight Schrute',
        password:
          '$2a$10$cWIvhraszSc2VRSgRZq3terL7hGvsrR3X16kZkobGP9P0BOvcy/u2',
        // senha: senha2
        email: 'dwight@dm.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (QueryInterface) => {
    await QueryInterface.bulkDelete('users', {}, {});
  },
};
