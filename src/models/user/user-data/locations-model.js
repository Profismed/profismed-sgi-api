import { DataTypes } from 'sequelize'
import { sequelize } from '../../../db/db-connection.js'

/**
 * Modelo de ubicación que define la estructura de la tabla 'locations' en la base de datos.
 *
 * @typedef {object} Location
 * @property {number} locationId - ID único de la ubicación (clave primaria, auto-incremental).
 * @property {string} locationName - Nombre de la ubicación.
 * @property {string} locationDescription - Descripción de la ubicación.
 */

export const Location = sequelize.define('location', {
  locationId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'location_id'
  },
  locationName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'location_name'
  },
  locationDescription: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'location_description'
  }
}, { timestamps: false })
