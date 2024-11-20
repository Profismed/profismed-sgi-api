import { DataTypes } from 'sequelize'
import { sequelize } from '../../../db/db-connection.js'

/**
 * Modelo de MonthlySales que representa las ventas mensuales.
 *
 * Este modelo utiliza Sequelize para definir la estructura de la tabla `monthly_sales`,
 * que almacena el total de ventas realizadas cada mes y año.
 */
export const MonthlySales = sequelize.define('MonthlySales', {
  /**
   * Mes de la venta.
   * @type {number}
   */
  sale_month: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'sale_month'
  },
  /**
   * Año de la venta.
   * @type {number}
   */
  sale_year: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'sale_year'
  },
  /**
   * Total de ventas del mes.
   * @type {number}
   */
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
