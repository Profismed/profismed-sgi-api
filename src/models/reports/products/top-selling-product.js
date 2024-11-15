import { DataTypes } from 'sequelize'
import { sequelize } from '../../../db/db-connection.js'

/**
 * Modelo de TopSellingProduct que representa el producto con la mayor cantidad de ventas.
 *
 * Este modelo utiliza Sequelize para definir la estructura de la tabla `top_selling_product`,
 * que almacena el producto con la mayor cantidad de ventas, incluyendo su nombre y la cantidad total vendida.
 */
export const TopSellingProduct = sequelize.define('TopSellingProduct', {
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
  tableName: 'top_selling_product',
  timestamps: false,
  freezeTableName: true
})
