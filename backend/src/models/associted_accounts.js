'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Associated_Accounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User,{
        foreingKey:"id_user",
        as:"user"
      })
    }
  }
  Associated_Accounts.init({
    id_user: {
      type: DataTypes.UUID,
      allowNull:false
    } 
  }, {
    sequelize,
    modelName: 'Associated_Accounts',
  });
  return Associated_Accounts;
};