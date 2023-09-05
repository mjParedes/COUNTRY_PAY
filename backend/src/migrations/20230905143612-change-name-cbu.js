'use strict';
const uniqueId = require('../helpers/randomId');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        queryInterface.renameColumn('Accounts', 'cbu', 'account_number', {
            allowNull: false,
            type: Sequelize.INTEGER,
            defaultValue: uniqueId,
        });
    },

    async down(queryInterface, Sequelize) {
        queryInterface.renameColumn('Accounts', 'cbu', {
            type: Sequelize.STRING,
            allowNull: false,
        });
    },
};
