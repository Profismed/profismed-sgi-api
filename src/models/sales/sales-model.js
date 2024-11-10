import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/db-connection.js'

/**
 * Modelo de Sales que define la estructura de la tabla 'sales' en la base de datos.
 *
 * @typedef {object} Sales
 * @property {number} salesId - ID único de la venta (clave primaria, auto-incremental).
 * @property {number} salesAmount - Monto total de la venta.
 * @property {number} buyerId - ID del usuario que compra (clave foránea).
 * @property {number} sellerId - ID del usuario que vende (clave foránea).
 */

export const Sales = sequelize.define('sales', {
  salesId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'sales_id'
  },
  salesAmount: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    field: 'sales_amount'
  },
  buyerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id (Buyer)',
    references: {
      model: 'user',
      key: 'user_id'
    }
  },
  sellerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id (Seller)',
    references: {
      model: 'user',
      key: 'user_id'
    }
  }
}, { timestamps: false })
