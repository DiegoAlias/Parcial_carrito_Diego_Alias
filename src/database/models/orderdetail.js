"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // belongsToOne
      OrderDetail.belongsTo(models.Product);

      // belongsTo
      OrderDetail.belongsTo(models.Order);
    }
  }
  OrderDetail.init(
    {
      quantity: DataTypes.DECIMAL,
      subtotal: DataTypes.DECIMAL,
      order_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "OrderDetail",
    }
  );
  return OrderDetail;
};
