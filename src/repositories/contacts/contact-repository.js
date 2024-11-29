import { Contact } from '../../models/contacts/contact-model.js'

/**
 * Guarda un nuevo contacto en la base de datos.
 *
 * @param {object} contact - Objeto que contiene los datos del contacto a guardar.
 * @param {string} contact.userId - ID del usuario al que pertenece el contacto.
 * @param {string} contact.contactName - Nombre del contacto.
 * @param {string} contact.contactEmail - Correo electrónico del contacto.
 * @param {string} contact.contactPhone - Teléfono del contacto.
 * @param {string} contact.contactJob - Profesión o cargo del contacto.
 * @param {string} contact.relationship - Relación con el usuario.
 * @param {boolean} contact.isActive - Indica si el contacto está activo.
 * @returns {Promise<void>} - Indica el éxito o fallo de la operación.
 */

export const saveContact = async (contact) => {
  const { userId, contactName, contactEmail, contactPhone, contactJob, relationship } = contact

  try {
    const verifyExistingContact = await verifyExistingContactByContactName(contactName)
    if (verifyExistingContact) {
      return res.status(400).json({ message: 'Contact already exists' })
    }

    return await Contact.create({
      userId,
      contactName,
      contactEmail,
      contactPhone,
      contactJob,
      relationship
    })
  } catch (e) {
    console.error(e)
  }
}

/**
 * Verifica si un contacto ya existe en la base de datos.
 *
 * @param {string} contactName - Nombre del contacto a verificar.
 * @returns {Promise<boolean>} - Devuelve `true` si el contacto existe, `false` en caso contrario.
 */

export const verifyExistingContactByContactName = async (contactName) => {
  try {
    const contact = await Contact.findOne({
      where: {
        contactName
      }
    })
    return contact !== null
  } catch (e) {
    console.error(e)
  }
}

/**
 * Verifica si un contacto ya existe en la base de datos por su ID.
 *
 * @param {number} contactId - ID del contacto a verificar.
 * @returns {Promise<boolean>} - Devuelve `true` si el contacto existe, `false` en caso contrario.
 */
export const verifyExistingContactById = async (contactId) => {
  try {
    const contact = await Contact.findOne({
      where: {
        contactId
      }
    })
    return contact !== null
  } catch (e) {
    console.error(e)
  }
}

/**
 * Actualiza un contacto existente en la base de datos.
 *
 * @param {object} contact - Objeto que contiene los datos del contacto a actualizar.
 * @param {string} contact.contactId - ID del contacto a actualizar.
 * @returns {Promise<void>} - Indica el éxito o fallo de la operación.
 */

export const updateContact = async (contact) => {
  const { contactId, contactName, contactEmail, contactPhone, contactJob, relationship } = contact

  try {
    await Contact.update({
      contactName,
      contactEmail,
      contactPhone,
      contactJob,
      relationship
    }, {
      where: {
        contactId
      }
    })
  } catch (e) {
    console.error(e)
  }
}

/**
 * Marca como no disponible un contacto de la base de datos por su ID.
 *
 * @param {number} contactId - ID del contacto a eliminar.
 * @returns {Promise<void>} - Indica el éxito o fallo de la operación.
 */

export const deleteContactById = async (contactId) => {
  try {
    await Contact.update({
      isActive: 0
    }, {
      where: {
        contactId
      }
    })
  } catch (e) {
    console.error(e)
  }
}

/**
 * Recuperar los contactos de un usuario de la base de datos.
 *
 * @param {number} userId - ID del usuario para recuperar sus contactos.
 * @returns {Promise<Array>} - Devuelve un array con los contactos del usuario.
 */

export const retrieveContactsByUserId = async (userId) => {
  try {
    const contacts = await Contact.findAll({
      where: {
        userId,
        isActive: 1
      }
    })
    return contacts
  } catch (e) {
    console.error(e)
  }
}

/**
  * Recupera un contacto de la base de datos por su ID.
  *
  * @param {number} contactId - ID del contacto a recuperar.
  * @returns {Promise<object>} - Devuelve un objeto con los datos del contacto.
  */
export const retrieveContactByContactId = async (contactId) => {
  try {
    const contact = await Contact.findOne({
      where: {
        contactId
      }
    })
    return contact
  } catch (e) {
    console.error(e)
  }
}

/**
 * Recupera todos los contactos de la base de datos.
 *
 * @returns {Promise<Array>} - Devuelve un array con todos los contactos.
 */

export const retrieveAllContacts = async () => {
  try {
    return await Contact.findAll()
  } catch (e) {
    console.error(e)
  }
}
