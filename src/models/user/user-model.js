import { DataTypes } from 'sequelize'
import { sequelize } from '../../db/db-connection.js'

/**
 * Modelo de usuario que define la estructura de la tabla 'user' en la base de datos.
 *
 * @typedef {object} User
 * @property {number} userId - ID único del usuario (clave primaria, auto-incremental).
 * @property {string} username - Nombre de usuario.
 * @property {string} firstName - Nombre del usuario.
 * @property {string} lastName - Apellido del usuario.
 * @property {string} userEmail - Correo electrónico del usuario.
 * @property {string} userPhone - Teléfono del usuario.
 * @property {number} roleId - ID del rol del usuario.
 * @property {number} documentId - Tipo de documento del usuario.
 * @property {string} documentNumber - Número de documento del usuario.
 * @property {string} userJob - Profesión o cargo del usuario.
 * @property {string} userContactOrigin - Origen de contacto del usuario.
 * @property {number} locationId - ID de la ubicación del usuario.
 * @property {string} password - Contraseña del usuario, almacenada como hash.
 * @property {number} isAvailable - Indica si el usuario está disponible (1) o no (0).
 */

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
  firstName: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'first_name'
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'last_name'
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
  },
  isAvailable: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 1,
    field: 'is_available'
  }
}, { timestamps: false })
