import { DataTypes } from 'sequelize'
import { sequelize } from '../../../db/db-connection.js'

/**
 * Modelo de TopBuyers que representa a los compradores más destacados en la base de datos.
 *
 * Este modelo utiliza Sequelize para definir la estructura de la tabla `top_buyers`,
 * la cual almacena información relevante de los compradores, incluyendo sus datos
 * de contacto, el monto total de sus compras, y una lista de productos comprados.
 */
export const TopBuyers = sequelize.define('TopBuyers', {
  /**
   * ID del comprador.
   * @type {number}
   */
  buyer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'buyer_id'
  },
  /**
   * Nombre de la empresa del comprador.
   * @type {string}
   */
  enterprise_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'enterprise_name'
  },
  /**
   * Primer nombre del contacto.
   * @type {string}
   */
  contact_first_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'contact_first_name'
  },
  /**
   * Apellido del contacto.
   * @type {string}
   */
  contact_last_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'contact_last_name'
  },
  /**
   * Correo electrónico del contacto.
   * @type {string}
   */
  contact_email: {
    type: DataTypes.STRING(100),
    allowNull: true,
    field: 'contact_email'
  },
  /**
   * Teléfono del contacto.
   * @type {string}
   */
  contact_phone: {
    type: DataTypes.STRING(15),
    allowNull: true,
    field: 'contact_phone'
  },
  /**
   * Documento de la empresa.
   * @type {string}
   */
  enterprise_document: {
    type: DataTypes.STRING(25),
    allowNull: true,
    field: 'enterprise_document'
  },
  /**
   * Cargo del contacto dentro de la empresa.
   * @type {string}
   */
  contact_job: {
    type: DataTypes.STRING(50),
    allowNull: true,
    field: 'contact_job'
  },
  /**
   * Origen del contacto.
   * @type {string}
   */
  contact_origin: {
    type: DataTypes.STRING(255),
    allowNull: true,
    field: 'contact_origin'
  },
  /**
   * ID de la ubicación del comprador.
   * @type {number}
   */
  location_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'location_id'
  },
  /**
   * Monto total de las compras realizadas por el comprador.
   * @type {number}
   */
  total_purchased: {
    type: DataTypes.DOUBLE,
    allowNull: true,
    field: 'total_purchased'
  },
  /**
   * Lista de productos comprados por el comprador.
   * @type {string}
   */
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
