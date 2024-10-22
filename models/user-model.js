import { Sequelize, DataTypes } from 'sequelize'
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from '../config/config.js'

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql'
})

export const User = sequelize.define('user', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'user_id'
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'user_name'
  },
  userEmail: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'user_email'
  },
  userPhone: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'user_phone'
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'role_id'
  },
  documentId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'document_id'
  },
  documentNumber: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'document_number'
  },
  userJob: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'user_job'
  },
  userContactOrigin: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'user_contact_origin'
  },
  locationId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'location_id'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'password_hash'
  }
}, { timestamps: false })
