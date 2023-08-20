'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Billingdata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Billingdata.hasOne(models.User,{
      //   foreignKey: 'id_billingdata',
      // })
    }
  }
  Billingdata.init({
    id: DataTypes.STRING,
    street: DataTypes.STRING,
    postalcode: DataTypes.STRING,
    country: DataTypes.STRING,
    province: DataTypes.STRING,
    nationalidentification: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Billingdata',
  });
  return Billingdata;
};