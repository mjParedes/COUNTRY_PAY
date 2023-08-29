'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Accounts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.User,{
        foreingKey:"id_account", //deberia estar al reves
        as:"user"
      })
      
      this.hasMany(models.Transaction,{
        foreingKey:"id_account",
        as:"transactions"
      })
      
      this.hasMany(models.Cards,{
        foreingKey:"id_account",
        as:"cards"
      })
    }
  }
  Accounts.init({
   
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },

    id_user:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    cbu: {
      type:DataTypes.STRING,
      allowNull:false
    },

    balance: {
      type:DataTypes.FLOAT,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Accounts',
  });
  return Accounts;
};