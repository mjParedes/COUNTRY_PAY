'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Transaction.hasMany(models.User_Transaction,{
      //   foreignKey:'idtransaction',
      //   targetKey:'id'
      // })

    }
  }
  Transaction.init({
    id: DataTypes.STRING,
    date: DataTypes.DATE,
    sender_user: DataTypes.STRING,
    receiving_user: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    payment_method: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};