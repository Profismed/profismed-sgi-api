import { DataTypes } from 'sequelize'
import { sequelize } from '../../../db/db-connection.js'

/**
 * Modelo de LeastSellingProduct que representa los productos con menor cantidad de ventas.
 *
 * Este modelo utiliza Sequelize para definir la estructura de la tabla `least_selling_product`,
 * que almacena los productos con menor cantidad de ventas, junto con su nombre y la cantidad total vendida.
 */
export const LeastSellingProduct = sequelize.define('LeastSellingProduct', {
  /**
   * ID del producto.
   * @type {number}
   */
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'product_id'
  },
  /**
   * Nombre del producto.
   * @type {string}
   */
  product_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'product_name'
  },
  /**
   * Cantidad total vendida del producto.
   * @type {number}
   */
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
