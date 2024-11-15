import { DataTypes } from 'sequelize'
import { sequelize } from '../../../db/db-connection.js'

export const SalesProductsView = sequelize.define('SalesProductsView', {
  sales_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'sales_id'
  },
  sale_date: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'sale_date'
  },
  sales_amount: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    field: 'sales_amount'
  },
  seller_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'seller_id'
  },
  buyer_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'buyer_id'
  },
  sales_item_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'sales_item_id'
  },
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'product_id'
  },
  product_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'product_name'
  },
  product_quantity: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'product_quantity'
  },
  unit_price: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    field: 'unit_price'
  },
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
