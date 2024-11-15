import { DataTypes } from 'sequelize'
import { sequelize } from '../../../db/db-connection.js'

export const TopSellers = sequelize.define('TopSellers', {
  seller_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'seller_id'
  },
  seller_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'seller_name'
  },
  seller_first_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'seller_first_name'
  },
  seller_last_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'seller_last_name'
  },
  seller_email: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'seller_email'
  },
  total_sales: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    field: 'total_sales'
  },
  products_sold: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'products_sold'
  }
}, {
  tableName: 'top_sellers',
  timestamps: false,
  freezeTableName: true
})
