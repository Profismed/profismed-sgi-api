import { DataTypes } from 'sequelize'
import { sequelize } from '../../../db/db-connection.js'

export const LeastSellingProduct = sequelize.define('LeastSellingProduct', {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'product_id'
  },
  product_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'product_name'
  },
  total_quantity_sold: {
    type: DataTypes.DECIMAL(32),
    allowNull: true,
    field: 'total_quantity_sold'
  }
}, {
  tableName: 'least_selling_product',
  timestamps: false,
  freezeTableName: true
})
