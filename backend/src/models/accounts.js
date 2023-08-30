'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Accounts extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            console.log(models);
            this.belongsTo(models.User, { foreignKey: 'userId' });

            this.hasMany(models.Transaction, { foreignKey: 'AccountId' });

            this.hasMany(models.Cards, { foreignKey: 'AccountId' });
        }
    }
    Accounts.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            cbu: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            balance: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            account_detail_stripe: {
                type: DataTypes.JSON,
                allowNull: true,
            },
        },
        {
            sequelize,
            modelName: 'Accounts',
        },
    );
    return Accounts;
};
