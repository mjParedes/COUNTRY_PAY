// const { DataTypes } = require('sequelize');
// const { db } = require('../database/config');
// const bcrypt = require('bcryptjs');

// const User = db.define(
//     'users',
//     {
//         id: {
//             primaryKey: true,
//             autoIncrement: true,
//             allowNull: false,
//             type: DataTypes.INTEGER,
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         lastName: {
//             type: DataTypes.STRING,
//             allowNull: true,
//         },
//         nickName: {
//             type: DataTypes.STRING,
//             allowNull: true,
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//         },
//         idBillingdata: {
//             type: DataTypes.STRING,
//             allowNull: true,
//         },
//         idAccount: {
//             type: DataTypes.STRING,
//             allowNull: true,
//         },
//         idCard: {
//             type: DataTypes.STRING,
//             allowNull: true,
//         },
//         phone: {
//             type: DataTypes.INTEGER,
//             allowNull: true,
//         },
//         balance: {
//             type: DataTypes.FLOAT,
//             allowNull: true,
//         },
//         status: {
//             type: DataTypes.ENUM('active', 'disabled'),
//             allowNull: false,
//             defaultValue: 'active',
//         },
//     },
//     {
//         hooks: {
//             beforeCreate: async (user) => {
//                 // Generar el hash de la contraseña utilizando Bcrypt.js
//                 const salt = await bcrypt.genSalt(12);
//                 const secretPassword = await bcrypt.hash(user.password, salt);
//                 user.password = secretPassword;
//             },
//         },
//     },
// );

// module.exports = User;
