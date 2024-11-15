import { DataTypes } from 'sequelize'
import { sequelize } from '../../../db/db-connection.js'

export const MonthlySales = sequelize.define('MonthlySales', {
  sale_month: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'sale_month'
  },
  sale_year: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'sale_year'
  },
  total_sales: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    field: 'total_sales'
  }
}, {
  tableName: 'monthly_sales',
  timestamps: false,
  freezeTableName: true
})
