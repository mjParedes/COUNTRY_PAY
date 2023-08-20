'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Associated_Accounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Associated_Accounts.belongsTo(models.User,{
      //   foreignKey:'id',
      //   targetKey: 'id_user'
      // })
    }
  }
  Associated_Accounts.init({
    id: DataTypes.STRING,
    id_user: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Associated_Accounts',
  });
  return Associated_Accounts;
};