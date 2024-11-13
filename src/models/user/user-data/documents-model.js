import { DataTypes } from 'sequelize'
import { sequelize } from '../../../db/db-connection.js'

/**
 * Modelo de documento que define la estructura de la tabla 'documents' en la base de datos.
 *
 * @typedef {object} Document
 * @property {number} documentId - ID único del documento (clave primaria, auto-incremental).
 * @property {string} documentName - Nombre del documento (abreviación).
 * @property {string} documentDescription - Descripción del documento.
 */

export const Document = sequelize.define('document', {
  documentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    field: 'document_id'
  },
  documentName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'document_name'
  },
  documentDescription: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'document_description'
  }
}, { timestamps: false })
