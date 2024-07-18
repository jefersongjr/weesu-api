// // const { QueryInterface, DataTypes } = require('sequelize');

// module.exports = {
//   up: async (QueryInterface, DataTypes) => {
//     await QueryInterface.createTable('users', {
//       id: {
//         allowNull: false,
//         autoIncrement: true,
//         primaryKey: true,
//         type: DataTypes.INTEGER,
//       },
//       fullname: {
//         allowNull: false,
//         type: DataTypes.STRING,
//       },
//       password: {
//         allowNull: false,
//         type: DataTypes.STRING,
//       },
//       email: {
//         allowNull: false,
//         type: DataTypes.STRING,
//         unique: true,
//       },
//       createdAt: {
//         allowNull: false,
//         type: DataTypes.DATE,
//       },
//       updatedAt: {
//         allowNull: false,
//         type: DataTypes.DATE,
//       },
//     });
//   },

//   down: async (QueryInterface) => {
//     await QueryInterface.dropTable('users');
//   },
// };
