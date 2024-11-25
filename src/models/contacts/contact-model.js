import { DataTypes } from 'sequelize';
import { sequelize } from '../../db/db-connection.js';

/**
 * Modelo de datos de Contacto.
 * 
 * Define la estructura de la tabla 'contact' en la base de datos.
 * @typedef {object} Contact
 * @property {number} contactId - ID único del contacto (clave primaria, auto-incremental).
 * @property {number} userId - ID del usuario al que pertenece el contacto.
 * @property {string} contactName - Nombre del contacto.
 * @property {string} contactEmail - Correo electrónico del contacto.
 * @property {string} contactPhone - Teléfono del contacto.
 * @property {string} contactJob - Profesión o cargo del contacto.
 * @property {string} relationship - Relación con el usuario.
 * @property {number} isActive - Indica si el contacto está activo.
 * 
 */

export const Contact = sequelize.define('contacts', {
    contactId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        field: 'contact_id'
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
    },
    contactName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'contact_name'
    },
    contactEmail: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'contact_email'
    },
    contactPhone: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'contact_phone'
    },
    contactJob: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'contact_job'
    },
    relationship: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'relationship'
    },
    isActive: {
        type: DataTypes.TINYINT,
        allowNull: false,
      defaultValue: 1,
        field: 'is_active'
    }
}, { timestamps: false});
