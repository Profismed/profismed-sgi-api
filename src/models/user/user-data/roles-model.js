import { DataTypes } from 'sequelize'
import { sequelize } from '../../../db/db-connection.js'

/**
 * Modelo de rol que define la estructura de la tabla 'roles' en la base de datos.
 *
 * @typedef {object} Role
 * @property {number} roleId - ID único del rol (clave primaria, auto-incremental).
 * @property {string} roleName - Nombre del rol.
 * @property {string} roleDescription - Descripción del rol.
 */

export const Role = sequelize.define('role', {
  roleId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'role_id'
  },
  roleName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'role_name'
  },
  roleDescription: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'role_description'
  }
}, { timestamps: false })
