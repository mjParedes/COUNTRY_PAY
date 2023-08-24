'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
              allowNull: false,
              // autoIncrement: true,
              primaryKey: true,
              type: Sequelize.UUID,
              defaultValue: Sequelize.UUIDV4
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            lastName: {
                type: Sequelize.STRING,
                allowNull: false,
            },

            nickName: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            id_billingdata: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            id_account: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            avatar: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');
    },
};
