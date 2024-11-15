import { DataTypes } from 'sequelize'
import { sequelize } from '../../../db/db-connection.js'

export const TopBuyers = sequelize.define('TopBuyers', {
  buyer_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  enterprise_name: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  contact_first_name: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  contact_last_name: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  contact_email: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  contact_phone: {
    type: DataTypes.STRING(15),
    allowNull: true
  },
  enterprise_document: {
    type: DataTypes.STRING(25),
    allowNull: true
  },
  contact_job: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  contact_origin: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  total_purchased: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  products_bought: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'top_buyers',
  timestamps: false,
  freezeTableName: true
})
