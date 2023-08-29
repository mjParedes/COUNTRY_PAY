'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Transaction extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.Accounts, {
                foreingKey: 'id_account',
                as: 'account',
            });

            this.hasOne(models.Detail_transactions, {
                foreingKey: 'id_transaction',
                as: 'detail',
            });
        }
    }
    Transaction.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            sender_user: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            receiving_user: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            id_account: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Transaction',
        },
    );
    return Transaction;
};
