import { DataTypes } from 'sequelize';
import { sequelize } from '../../db/db-connection.js';

/**
 * Modelo de producto que define la estructura de la tabla 'products' en la base de datos.
 *
 * @typedef {object} Product
 * @property {number} productId - ID único del producto (clave primaria, auto-incremental).
 * @property {string} productName - Nombre del producto.
 * @property {string} productDescription - Descripción del producto.
 * @property {number} productPrice - Precio del producto.
 * @property {boolean} isAvailable - Indica si el producto está disponible.
 * @property {number} quantity - Cantidad en inventario del producto.
 * @property {number} userId - ID del usuario que creó el producto (clave foránea).
 */

export const Product = sequelize.define('product', {
  productId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'product_id'
  },
  productName: {
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'product_name'
  },
  productDescription: {
    type: DataTypes.STRING(200),
    allowNull: true,
    field: 'product_description'
  },
  productPrice: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    field: 'product_price'
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'is_available',
    defaultValue: true
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'quantity',
    defaultValue: 0
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
    references: {
      model: 'user',
      key: 'user_id'
    }
  }
}, { timestamps: false });
