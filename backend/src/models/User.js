'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            lastName: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            nickName: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            idBillingdata: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            idAccount: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            idCard: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            phone: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            balance: {
                type: DataTypes.FLOAT,
                allowNull: true,
            },
            status: {
                type: DataTypes.ENUM('active', 'disabled'),
                allowNull: false,
                defaultValue: 'active',
            },
        },
        {
            sequelize,
            modelName: 'User',
        },
    );
    return User;
};
