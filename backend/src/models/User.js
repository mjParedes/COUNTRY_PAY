'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.hasMany(models.Associated_account,{
      //   foreignKey:'id_user',
      // }),
      // User.hasMany(models.User_Transaction,{
      //   foreignKey:'iduser',
      // })
      // User.belongsTo(models.Billingdata,{
      //   foreignKey:'id',
      //   targetKey:'id_billingdata'
      // })
      // User.hasMany(models.Cards,{
      //   foreignKey:'id',
      //   targetKey:'id_card'
      // })
    }
  }
  User.init({
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    nickname: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    id_billingdata: DataTypes.STRING,
    id_account: DataTypes.STRING,
    id_card: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    balance: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};