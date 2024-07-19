// 'use strict';

// /**
//  * @type {import('sequelize-cli').Migration}
//  */
// module.exports = {
//   up: async (QueryInterface) => {
//     await QueryInterface.bulkInsert('products', [
//       {
//         name: 'Nike Air Max SC',
//         description: 'VISUAL OLD SCHOOL. CONFORTO NEW SCHOOL.',
//         price: 360.99,
//         quantity: 8,
//         model: 'Air Max',
//         referencia: 'NIKE12345',
//         brand: 'Nike',
//         image_url: 'https://imgnike-a.akamaihd.net/768x768/01122452A11.jpg',
//         user_id: 1,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         name: 'Adidas Duramo Sl',
//         description: 'Versátil tanto para correr quanto para treinar',
//         price: 281.29,
//         quantity: 10,
//         model: 'Ultraboost',
//         referencia: 'ADIDAS54321',
//         brand: 'Adidas',
//         image_url:
//           'https://m.media-amazon.com/images/I/61svcDpQYoL._AC_SY575_.jpg',
//         user_id: 1,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         name: 'Puma X-Ray 2',
//         description: 'Item indispensável para quem busca estilo e conforto',
//         price: 419.99,
//         quantity: 5,
//         model: 'X-Ray 2',
//         referencia: 'PUMA67890',
//         brand: 'Puma',
//         image_url:
//           'https://m.media-amazon.com/images/I/51hr6hXHouL._AC_SY575_.jpg',
//         user_id: 1,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         name: 'Asics Gel-Sparta 2',
//         description: 'Tênis de corrida com suporte extra da Asics',
//         price: 295.99,
//         quantity: 8,
//         model: 'Gel-Sparta',
//         referencia: 'ASICS98765',
//         brand: 'Asics',
//         image_url: 'https://imgcentauro-a.akamaihd.net/768x768/9832431B.jpg',
//         user_id: 1,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         name: 'Tênis Mizuno Wave Dynasty 5',
//         description: 'Tênis de alta tecnologia da Mizuno',
//         price: 299.99,
//         quantity: 4,
//         model: 'Wave Dynasty',
//         referencia: 'MIZUNO11223',
//         brand: 'Mizuno',
//         image_url:
//           'https://m.media-amazon.com/images/I/61lwe9KcnKL._AC_SY575_.jpg',
//         user_id: 1,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         name: 'Camiseta Nike Sportswear',
//         description:
//           'Tecido jersey de algodão e um logotipo clássico no peito.',
//         price: 72.19,
//         quantity: 25,
//         model: 'Icon Futura',
//         referencia: 'NIKE14523',
//         brand: 'Nike',
//         image_url: 'https://imgnike-a.akamaihd.net/768x768/01638818A20.jpg',
//         user_id: 2,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         name: 'Camisa Polo Lacoste',
//         description: 'Camisa polo Slim Fit',
//         price: 319.99,
//         quantity: 35,
//         model: 'Slim fit',
//         referencia: 'LACOSTE22334',
//         brand: 'Lacoste',
//         image_url:
//           'https://m.media-amazon.com/images/I/61LCtujKrCL._AC_SX569_.jpg',
//         user_id: 2,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         name: 'Camiseta Adidas Essentials',
//         description: 'Perfeita para todas as ocasiões. ',
//         price: 129,
//         quantity: 20,
//         model: 'Essentials',
//         referencia: 'ADIDAS33445',
//         brand: 'Adidas',
//         image_url:
//           'https://m.media-amazon.com/images/I/71K+qTAswpL._AC_SX569_.jpg',
//         user_id: 2,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         name: 'Camiseta Básica Reserva',
//         description:
//           'A peça curinga da Reserva que combina com o seu armário inteiro',
//         price: 143.79,
//         quantity: 15,
//         model: 'Endorphin',
//         referencia: 'SAUCONY55667',
//         brand: 'Saucony',
//         image_url:
//           'https://m.media-amazon.com/images/I/41giVC2inSL._AC_SX569_.jpg',
//         user_id: 2,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//       {
//         name: 'Moletom Under Armour Rival Fleece',
//         description: 'Moletom com capuz com cordão ajustável.',
//         price: 230.76,
//         quantity: 5,
//         model: 'Rival Fleece',
//         referencia: 'UAS66778',
//         brand: 'Under Armour',
//         image_url:
//           'https://m.media-amazon.com/images/I/51ecxCuqdFL._AC_SX569_.jpg',
//         user_id: 2,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       },
//     ]);
//   },

//   down: async (QueryInterface) => {
//     await QueryInterface.bulkDelete('products', null, {});
//   },
// };
