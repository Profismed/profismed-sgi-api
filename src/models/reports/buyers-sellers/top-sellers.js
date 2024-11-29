import { DataTypes } from 'sequelize'
import { sequelize } from '../../../db/db-connection.js'

/**
 * Modelo de TopSellers que representa a los vendedores más destacados en la base de datos.
 *
 * Este modelo utiliza Sequelize para definir la estructura de la tabla `top_sellers`,
 * la cual almacena información relevante de los vendedores, incluyendo sus datos
 * de contacto, el monto total de sus ventas, y una lista de productos vendidos.
 */
export const TopSellers = sequelize.define('TopSellers', {
  /**
   * ID del vendedor.
   * @type {number}
   */
  seller_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'seller_id'
  },
  /**
   * Nombre del vendedor.
   * @type {string}
   */
  seller_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'seller_name'
  },
  /**
   * Primer nombre del vendedor.
   * @type {string}
   */
  seller_first_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'seller_first_name'
  },
  /**
   * Apellido del vendedor.
   * @type {string}
   */
  seller_last_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'seller_last_name'
  },
  /**
   * Correo electrónico del vendedor.
   * @type {string}
   */
  seller_email: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'seller_email'
  },
  /**
   * Monto total de las ventas realizadas por el vendedor.
   * @type {number}
   */
  total_sales: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    field: 'total_sales'
  },
    /**
  * Cantidad total de productos vendidos por el vendedor.
  * @type {number}
  */
  total_sales_amount: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'total_sales_amount'
  },
  /**
  * Cantidad total de productos vendidos por el vendedor.
  * @type {number}
  */
  total_quantity_sold: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'total_quantity_sold'
  },
  /**
   * Lista de productos vendidos por el vendedor.
   * @type {string}
   */
  products_sold: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'products_sold'
  }
}, {
  tableName: 'top_sellers',
  timestamps: false,
  freezeTableName: true
})
