'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        //asociaciones de Associated_Accounts
        await queryInterface.addColumn(
            'Associated_Accounts', // nombre de la tabla
            'id_user', // nombre de la columna a agregar
            {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'userId',
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            },
        );

        //Asociaciones de User_Transactions
        await queryInterface.addColumn(
            'User_Transactions', // nombre de la tabla
            'iduser', // nombre de la columna a agregar
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'userId',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
        );
        await queryInterface.addColumn(
            'User_Transactions', // nombre de la tabla
            'idtransaction', // nombre de la columna a agregar
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Transactions',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
        );

        //Asociaciones de  la talba Users
        await queryInterface.addColumn(
            'Users', // nombre de la tabla
            'billingdataId', // nombre de la columna a agregar //-->sequelize busca este campo por defecto por lo q se tiene q llamar asi si o si 
            {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'Billingdata',
                    key: 'id',
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            },
        );

        await queryInterface.addColumn(
            'Users', // nombre de la tabla
            'accountId', // nombre de la columna a agregar //-->sequelize busca este campo por defecto por lo q se tiene q llamar asi si o si 
            {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'Accounts',
                    key: 'id',
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            },
        );

        //asociaciones de Accounts
        await queryInterface.addColumn(
            'Accounts', // nombre de la tabla
            'id_user', // nombre de la columna a agregar
            {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'Users',
                    key: 'userId',
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            },
        );

        //asociaciones de Transaction
        await queryInterface.addColumn(
            'Transactions', // nombre de la tabla
            'id_account', // nombre de la columna a agregar
            {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Accounts',
                    key: 'id',
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            },
        );

        //asociaciones de Detail_transactions
        await queryInterface.addColumn(
            'Detail_transactions', // nombre de la tabla
            'id_transaction', // nombre de la columna a agregar
            {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Transactions',
                    key: 'id',
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE',
                },
            },
        );

        ///////////////
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    },
};
