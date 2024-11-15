import { DataTypes } from 'sequelize'
import { sequelize } from '../../../db/db-connection.js'

export const SalesProductsSummary = sequelize.define('SalesProductsSummary', {
  sales_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'sales_id'
  },
  sale_date: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'sale_date'
  },
  sales_amount: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    field: 'sales_amount'
  },
  seller_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'seller_id'
  },
  buyer_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'buyer_id'
  },
  product_names: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'product_names'
  },
  total_quantity: {
    type: DataTypes.DECIMAL(32),
    allowNull: true,
    field: 'total_quantity'
  },
  total_subtotal: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    field: 'total_subtotal'
  }
}, {
  tableName: 'sales_products_summary',
  timestamps: false,
  freezeTableName: true
})
