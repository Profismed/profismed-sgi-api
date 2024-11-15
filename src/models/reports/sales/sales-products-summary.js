import { DataTypes } from 'sequelize'
import { sequelize } from '../../../db/db-connection.js'

/**
 * Modelo de SalesProductsSummary que representa un resumen de las ventas y productos asociados.
 *
 * Este modelo utiliza Sequelize para definir la estructura de la vista `sales_products_summary`,
 * que muestra detalles resumidos de las ventas, incluyendo la fecha, el monto total, el vendedor,
 * el comprador, nombres de productos, cantidad total vendida y el subtotal total de cada venta.
 */
export const SalesProductsSummary = sequelize.define('SalesProductsSummary', {
  /**
   * ID de la venta.
   * @type {number}
   */
  sales_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'sales_id'
  },
  /**
   * Fecha de la venta.
   * @type {Date}
   */
  sale_date: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'sale_date'
  },
  /**
   * Monto total de la venta.
   * @type {number}
   */
  sales_amount: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    field: 'sales_amount'
  },
  /**
   * ID del vendedor.
   * @type {number}
   */
  seller_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'seller_id'
  },
  /**
   * ID del comprador.
   * @type {number}
   */
  buyer_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'buyer_id'
  },
  /**
   * Nombres de los productos vendidos, separados por coma.
   * @type {string}
   */
  product_names: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'product_names'
  },
  /**
   * Cantidad total de productos vendidos en la venta.
   * @type {number}
   */
  total_quantity: {
    type: DataTypes.DECIMAL(32),
    allowNull: true,
    field: 'total_quantity'
  },
  /**
   * Subtotal total de los productos vendidos en la venta.
   * @type {number}
   */
  total_subtotal: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    field: 'total_subtotal'
  }
}, {
  tableName: 'sales_products_summary',
  timestamps: false,
  freezeTableName: true
})
