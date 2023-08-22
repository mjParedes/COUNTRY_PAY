'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      nickname: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      id_billingdata: {
        type: Sequelize.STRING,
        // references:{
        //   model:'Billingdata',
        //   key:'id'
        // },
        // onUpdate:"CASCADE",
        // onDelete:"CASCADE"
      },
      id_account: {
        type: Sequelize.STRING
      },
      id_card: {
        type: Sequelize.STRING,
        // references:{
        //   model:'Card',
        //   key:'id'
        // },
        // onUpdate:"CASCADE",
        // onDelete:"CASCADE"
      },
      phone: {
        type: Sequelize.INTEGER
      },
      balance: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};