import { DataTypes } from 'sequelize'
import { sequelize } from '../../../db/db-connection.js'

export const MonthlySales = sequelize.define('MonthlySales', {
  sale_month: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sale_year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  total_sales: {
    type: DataTypes.DOUBLE,
    allowNull: true
  }
}, {
  tableName: 'monthly_sales',
  timestamps: false,
  freezeTableName: true
})
