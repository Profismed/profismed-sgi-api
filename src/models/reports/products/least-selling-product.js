import { DataTypes } from 'sequelize'
import { sequelize } from '../../../db/db-connection.js'

export const LeastSellingProduct = sequelize.define('LeastSellingProduct', {
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
  tableName: 'least_selling_product',
  timestamps: false,
  freezeTableName: true
})
