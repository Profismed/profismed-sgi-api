import { DataTypes } from 'sequelize'
import { sequelize } from '../../../db/db-connection.js'

export const TopBuyers = sequelize.define('TopBuyers', {
  buyer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'buyer_id'
  },
  enterprise_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'enterprise_name'
  },
  contact_first_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'contact_first_name'
  },
  contact_last_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'contact_last_name'
  },
  contact_email: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'contact_email'
  },
  contact_phone: {
    type: DataTypes.STRING(15),
    allowNull: true,
    field: 'contact_phone'
  },
  enterprise_document: {
    type: DataTypes.STRING(25),
    allowNull: true,
    field: 'enterprise_document'
  },
  contact_job: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'contact_job'
  },
  contact_origin: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'contact_origin'
  },
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'location_id'
  },
  total_purchased: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    field: 'total_purchased'
  },
  products_bought: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'products_bought'
  }
}, {
  tableName: 'top_buyers',
  timestamps: false,
  freezeTableName: true
})
