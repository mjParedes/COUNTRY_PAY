'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Detail_transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Trasaction,{
        foreingKey:"id_transaction",
        as:"transaction"
      })
    }
  }
  Detail_transactions.init({
    id_transaction:{
      type:DataTypes.UUID,
      allowNull:false
    },
    ammount:{
      type:DataTypes.INTEGER,
      allowNull:false
    }, 
    payment_method:{
      type: DataTypes.STRING,
      allowNull:false
    }, 
    status:{
      type: DataTypes.STRING,
      allowNull:false
    }, 
    id_transaction_stripe:{
      type:DataTypes.STRING,
      allowNull: true
    } 
  }, {
    sequelize,
    modelName: 'Detail_transactions',
  });
  return Detail_transactions;
};