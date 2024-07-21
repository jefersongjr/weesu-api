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
        img_profile:
          'https://www.looper.com/img/gallery/the-worst-things-jim-halpert-has-ever-done/intro-1562363608.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dwight Schrute',
        password:
          '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
        // senha: senha2
        email: 'ds_manager@dm.com',
        img_profile:
          'https://upload.wikimedia.org/wikipedia/en/c/cd/Dwight_Schrute.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (QueryInterface) => {
    await QueryInterface.bulkDelete('users', {}, {});
  },
};
