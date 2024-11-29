import { updateContact, verifyExistingContactByContactName, verifyExistingContactById, saveContact, deleteContactById, retrieveContactsByUserId, retrieveContactByContactId, retrieveAllContacts } from '../../repositories/contacts/contact-repository.js'
import { verifyExistingUserById } from '../../repositories/users/user-repository.js'
import { JWT_SECRET } from '../../config/config.js'
import jwt from 'jsonwebtoken'

/**
 * Registra un nuevo contacto en la base de datos.
 * Verifica si el contacto ya existe antes de crearlo.
 *
 * @param {object} req - Objeto de solicitud de Express, que contiene los datos del contacto en `req.body`.
 * @param {object} res - Objeto de respuesta de Express para enviar la respuesta HTTP.
 * @returns {Promise<void>} - Envía una respuesta indicando si el registro fue exitoso o si ocurrió un error.
 */

export const registerContact = async (req, res) => {
  const {
    userId,
    contactName,
    contactEmail,
    contactPhone,
    contactJob,
    relationship
  } = req.body

  const contact = {
    userId,
    contactName,
    contactEmail,
    contactPhone,
    contactJob,
    relationship
  }

  if (await verifyExistingContactByContactName(contactName)) {
    return res.status(400).json({ message: 'Contact already exists' })
  }

  try {
    await saveContact(contact)
    res.status(201).json({ message: 'Contact created' })
  } catch {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

/**
 * Actualiza un contacto existente en la base de datos.
 * Verifica si el contacto existe antes de actualizarlo.
 *
 * @param {object} req - Objeto de solicitud de Express, que contiene los datos del contacto en `req.body`.
 * @param {object} res - Objeto de respuesta de Express para enviar la respuesta HTTP.
 * @returns {Promise<void>} - Envía una respuesta indicando si la actualización fue exitosa o si ocurrió un error.
 */

export const updateExistentContact = async (req, res) => {
  const {
    contactId,
    contactName,
    contactEmail,
    contactPhone,
    contactJob,
    relationship
  } = req.body

  const contact = {
    contactId,
    contactName,
    contactEmail,
    contactPhone,
    contactJob,
    relationship
  }

  if (!(await verifyExistingContactByContactName(contactName))) {
    return res.status(400).json({ message: 'Contact does not exist' })
  }

  try {
    const token = req.cookies.token
    const userData = jwt.verify(token, JWT_SECRET)

    if (userData.userId !== contact.userId) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    await updateContact(contact)
    res.status(200).json({ message: 'Contact updated' })
  } catch {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

/**
 * Elimina un contacto de la base de datos por su ID.
 * Verifica si el contacto existe antes de eliminarlo.
 *
 * @param {object} req - Objeto de solicitud de Express, que contiene el ID del contacto en `req.params`.
 * @param {object} res - Objeto de respuesta de Express para enviar la respuesta HTTP.
 * @returns {Promise<void>} - Envía una respuesta indicando si la eliminación fue exitosa o si ocurrió un error.
 */

export const deleteContact = async (req, res) => {
  const { contactId } = req.params

  if (!contactId) {
    return res.status(400).json({ message: 'Contact ID is required' })
  }

  if (!(await verifyExistingContactById(contactId))) {
    return res.status(400).json({ message: 'Contact does not exist' })
  }

  try {
    await deleteContactById(contactId)
    res.status(200).json({ message: 'Contact deleted' })
  } catch {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

/**
 * Obtiene todos los contactos de la base de datos.
 *
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express para enviar la respuesta HTTP.
 * @returns {Promise<void>} - Envía una respuesta con todos los contactos o un mensaje de error.
 */

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await retrieveAllContacts()
    res.status(200).json(contacts)
  } catch {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

/**
 * Obtiene los contactos de un usuario por su ID.
 *
 * @param {object} req - Objeto de solicitud de Express, que contiene el ID del usuario en `req.params`.
 * @param {object} res - Objeto de respuesta de Express para enviar la respuesta HTTP.
 * @returns {Promise<void>} - Envía una respuesta con los contactos del usuario o un mensaje de error.
 */

export const getContactsByUserId = async (req, res) => {
  const { userId } = req.params

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' })
  }

  if (!(await verifyExistingUserById(userId))) {
    return res.status(400).json({ message: 'User does not exist' })
  }

  try {
    const contacts = await retrieveContactsByUserId(userId)
    res.status(200).json(contacts)
  } catch {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

/**
 * Obtiene un contacto por su ID.
 *
 * @param {object} req - Objeto de solicitud de Express, que contiene el ID del contacto en `req.params`.
 * @param {object} res - Objeto de respuesta de Express para enviar la respuesta HTTP.
 * @returns {Promise<void>} - Envía una respuesta con el contacto encontrado o un mensaje de error.
 */

export const getContactById = async (req, res) => {
  const { contactId } = req.params

  if (!contactId) {
    return res.status(400).json({ message: 'Contact ID is required' })
  }

  if (!(await verifyExistingContactById(contactId))) {
    return res.status(400).json({ message: 'Contact does not exist' })
  }

  try {
    const contact = await retrieveContactsByUserId(contactId)
    res.status(200).json(contact)
  } catch {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
}
