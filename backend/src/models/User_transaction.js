'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User_Transaction.belongsTo(models.User,{
      //   foreignKey:'id',
      //   targetKey:'iduser'
      // })
      // User_Transaction.hasMany(models.Transaction,{
      //   foreignKey:'id'
      // })
    }
  }
  User_Transaction.init({
    id: DataTypes.STRING,
    iduser: DataTypes.STRING,
    idtransaction: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_Transaction',
  });
  return User_Transaction;
};