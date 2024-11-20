import { DataTypes } from 'sequelize'
import { sequelize } from '../../../db/db-connection.js'

/**
 * Modelo de SalesProductsView que representa una vista de las ventas y productos asociados.
 *
 * Este modelo utiliza Sequelize para definir la estructura de la vista `sales_products_view`,
 * que muestra detalles de las ventas, incluyendo la fecha, el monto, el vendedor, el comprador,
 * y los productos vendidos con sus respectivas cantidades, precios y subtotales.
 */
export const SalesProductsView = sequelize.define('SalesProductsView', {
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
   * ID del elemento de venta.
   * @type {number}
   */
  sales_item_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'sales_item_id'
  },
  /**
   * ID del producto vendido.
   * @type {number}
   */
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'product_id'
  },
  /**
   * Nombre del producto vendido.
   * @type {string}
   */
  product_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'product_name'
  },
  /**
   * Cantidad del producto vendido.
   * @type {number}
   */
  product_quantity: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'product_quantity'
  },
  /**
   * Precio unitario del producto.
   * @type {number}
   */
  unit_price: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    field: 'unit_price'
  },
  /**
   * Subtotal para el producto (cantidad * precio unitario).
   * @type {number}
   */
  subtotal: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    field: 'subtotal'
  }
}, {
  tableName: 'sales_products_view',
  timestamps: false,
  freezeTableName: true
})
