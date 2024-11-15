import { DataTypes } from 'sequelize';
import { sequelize } from "../../../db/db-connection.js";

export const SalesProductsView = sequelize.define('SalesProductsView', {
  sales_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sale_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  sales_amount: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  seller_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  buyer_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  sales_item_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  product_name: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  product_quantity: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  unit_price: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  subtotal: {
    type: DataTypes.DOUBLE,
    allowNull: true
  }
}, {
  tableName: 'sales_products_view',
  timestamps: false,
  freezeTableName: true,
});
