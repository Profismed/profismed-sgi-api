import { DataTypes } from 'sequelize';
import { sequelize } from '../../db/db-connection.js';

/**
 * Modelo de SalesItemModel que define la estructura de la tabla 'sales_item' en la base de datos.
 *
 * @typedef {object} SalesItem
 * @property {number} salesItemId - ID único del ítem de venta (clave primaria, auto-incremental).
 * @property {number} productId - ID del producto asociado (clave foránea).
 * @property {number} productQuantity - Cantidad de producto vendida.
 * @property {number} unitPrice - Precio unitario del producto en esta venta.
 * @property {number} subtotal - Subtotal calculado (cantidad * precio unitario).
 * @property {number} salesId - ID de la venta asociada (clave foránea).
 */

export const SalesItem = sequelize.define('sales_item', {
  salesItemId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'sales_item_id'
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'product_id',
    references: {
      model: 'product',
      key: 'product_id'
    }
  },
  productQuantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'product_quantity'
  },
  unitPrice: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    field: 'unit_price'
  },
  subtotal: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    field: 'subtotal'
  },
  salesId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'sales_id',
    references: {
      model: 'sales',
      key: 'sales_id'
    }
  }
}, { timestamps: false, tableName: 'sales_item' });
