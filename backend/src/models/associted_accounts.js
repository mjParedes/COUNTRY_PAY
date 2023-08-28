'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Associted_Accounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Associted_Accounts.init({
    id_user: {
      type:DataTypes.STRING,
      allowNull:false
    } 
  }, {
    sequelize,
    modelName: 'Associted_Accounts',
  });
  return Associted_Accounts;
};