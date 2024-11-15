import { DataTypes } from 'sequelize'
import { sequelize } from '../../../db/db-connection.js'

/**
 * Modelo de LeastSalesZone que representa las zonas con menor cantidad de ventas.
 *
 * Este modelo utiliza Sequelize para definir la estructura de la vista `least_sales_zone`,
 * que muestra las ubicaciones (zonas) con el menor total de ventas, incluyendo el ID de la
 * ubicación, el nombre de la ubicación y el total de ventas en esa zona.
 */
export const LeastSalesZone = sequelize.define('LeastSalesZone', {
  /**
   * ID de la ubicación o zona de ventas.
   * @type {number}
   */
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  /**
   * Nombre de la ubicación o zona de ventas.
   * @type {string}
   */
  location_name: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  /**
   * Total de ventas en la zona especificada.
   * @type {number}
   */
  total_sales: {
    type: DataTypes.DOUBLE,
    allowNull: true
  }
}, {
  tableName: 'least_sales_zone',
  timestamps: false,
  freezeTableName: true
})
