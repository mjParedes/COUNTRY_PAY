'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Cards.belongsTo(models.User,{
      //   foreignKey:'id_card',
      // })
    }
  }
  Cards.init({
    id: DataTypes.STRING,
    number: DataTypes.INTEGER,
    exp_date: DataTypes.INTEGER,
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    security_code: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cards',
  });
  return Cards;
};