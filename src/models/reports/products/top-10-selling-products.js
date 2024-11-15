import { DataTypes } from 'sequelize';
import { sequelize } from "../../../db/db-connection.js";

export const Top10Products = sequelize.define('Top10Products', {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  product_name: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  total_quantity_sold: {
    type: DataTypes.DECIMAL(32),
    allowNull: true
  }
}, {
  tableName: 'top_10_products',
  timestamps: false,
  freezeTableName: true,
});
