import { DataTypes } from 'sequelize'
import { sequelize } from '../../../db/db-connection.js'

export const TopSellers = sequelize.define('TopSellers', {
  seller_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  seller_name: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  seller_first_name: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  seller_last_name: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  seller_email: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  total_sales: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  products_sold: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'top_sellers',
  timestamps: false,
  freezeTableName: true
})
