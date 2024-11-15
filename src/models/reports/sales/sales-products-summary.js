import { DataTypes } from 'sequelize';
import { sequelize } from "../../../db/db-connection.js";

export const SalesProductsSummary = sequelize.define('SalesProductsSummary', {
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
  product_names: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  total_quantity: {
    type: DataTypes.DECIMAL(32),
    allowNull: true
  },
  total_subtotal: {
    type: DataTypes.DOUBLE,
    allowNull: true
  }
}, {
  tableName: 'sales_products_summary',
  timestamps: false,
  freezeTableName: true,
});
