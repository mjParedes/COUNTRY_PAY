'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    console.log("no hice nada")
  //   await queryInterface.addColumn(
  //     'Users', // nombre de la tabla
  //     'userId', // nombre de la columna a agregar
  //     {
  //         type: Sequelize.STRING,
  //         defaultValue: "bug-sequelize",
          
  //     },
  // );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
