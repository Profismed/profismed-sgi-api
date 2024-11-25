import { saveUser, verifyExistingUserByUsername, updateUserDb, deleteUserByIdDb, verifyExistingUserById, getAllUsersDb, verifyExistingUserByEmail, retrieveUserById, saveClient, getAllClientsDb} from '../../repositories/users/user-repository.js'
import { verifyExistingContactByContactName } from '../../repositories/contacts/contact-repository.js'
import { saveContact } from '../../repositories/contacts/contact-repository.js'
import { JWT_SECRET } from '../../config/config.js'
import jwt from 'jsonwebtoken'

/**
 * Registra un nuevo usuario en el sistema.
 * Verifica si el nombre de usuario ya existe antes de crear el usuario.
 * Verifica si el correo electrónico ya está en uso antes de crear el usuario.
 *
 * @param {object} req - Objeto de solicitud de Express, que contiene los datos del usuario en `req.body`.
 * @param {object} res - Objeto de respuesta de Express para enviar la respuesta HTTP.
 * @returns {Promise<void>} - Envía una respuesta indicando si el registro fue exitoso o si ocurrió un error.
 */
export const registerUser = async (req, res) => {
  const {
    username,
    firstName,
    lastName,
    userEmail,
    userPhone,
    roleId,
    documentId,
    documentNumber,
    userJob,
    userContactOrigin,
    locationId,
    password
  } = req.body

  const user = {
    username,
    firstName,
    lastName,
    userEmail,
    userPhone,
    roleId,
    documentId,
    documentNumber,
    userJob,
    userContactOrigin,
    locationId,
    password
  }

  if (await verifyExistingUserByUsername(username)) {
    return res.status(400).json({ message: 'User already exists' })
  }

  if (await verifyExistingUserByEmail(userEmail)) {
    return res.status(400).json({ message: 'Email already in use' })
  }

  try {
    await saveUser(user)
    res.status(201).json({ message: 'User created' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

/**
  * Registrar un cliente en el sistema.
  * Verifica si el nombre de usuario ya existe antes de crear el usuario.
  *
  * @param {object} req - Objeto de solicitud de Express, que contiene los datos del cliente en `req.body`.
  * @param {object} res - Objeto de respuesta de Express para enviar la respuesta HTTP.
  * @returns {Promise<void>} - Envía una respuesta indicando si el registro fue exitoso o si ocurrió un error.
  */
export const registerClient = async (req, res) => {
  const {
    username,
    firstName,
  } = req.body
  const user = {
    username,
    firstName,
  }
  if (await verifyExistingUserByUsername(username)) {
    return res.status(400).json({ message: 'User already exists' })
  }
  try {
    await saveClient(user)
    res.status(201).json({ message: 'User created' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
  }

/**
 * Actualiza un usuario existente en el sistema.
 * Verifica si el usuario existe antes de realizar la actualización.
 * Si se realiza la actualización del usuario autenticado, genera un nuevo token.
 *
 * @param {object} req - Objeto de solicitud de Express, que contiene `userId` en `req.params` y los datos a actualizar en `req.body`.
 * @param {object} res - Objeto de respuesta de Express para enviar la respuesta HTTP.
 * @returns {Promise<void>} - Envía una respuesta indicando si la actualización fue exitosa o si ocurrió un error.
 */
export const updateUser = async (req, res) => {
  const { userId } = req.params
  const {
    username,
    firstName,
    lastName,
    userEmail,
    userPhone,
    roleId,
    documentId,
    documentNumber,
    userJob,
    userContactOrigin,
    locationId
  } = req.body

  const user = {
    username,
    firstName,
    lastName,
    userEmail,
    userPhone,
    roleId,
    documentId,
    documentNumber,
    userJob,
    userContactOrigin,
    locationId
  }

  if (!(await verifyExistingUserById(userId))) {
    return res.status(404).json({ message: 'User not found' })
  }

  try {
    const token = req.cookies.token
    const userData = jwt.verify(token, JWT_SECRET)

    await updateUserDb(userId, user)

    if (userData.userId === Number(userId)) {
      res.clearCookie('token')

      const updatedUser = await retrieveUserById(userId)
      const newToken = jwt.sign(updatedUser, JWT_SECRET, { expiresIn: '3h' })

      res.cookie('token', newToken, {
        httpOnly: true,
        secure: true,
        maxAge: 10800000,
        sameSite: 'none'
      })
    }

    return res.status(200).json({ message: 'User updated' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

/**
 * Elimina (marca como no disponible) un usuario del sistema.
 * Verifica si el usuario existe antes de eliminarlo.
 *
 * @param {object} req - Objeto de solicitud de Express, que contiene `userId` en `req.params`.
 * @param {object} res - Objeto de respuesta de Express para enviar la respuesta HTTP.
 * @returns {Promise<void>} - Envía una respuesta indicando si la eliminación fue exitosa o si ocurrió un error.
 */
export const deleteUser = async (req, res) => {
  const { userId } = req.params

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required' })
  }

  if (!(await verifyExistingUserById(userId))) {
    return res.status(404).json({ message: 'User not found' })
  }

  try {
    await deleteUserByIdDb(userId)
    res.status(200).json({ message: 'User deleted' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

/**
 * Recupera todos los usuarios que no tienen el rol de administrador (ID de rol diferente de 1).
 *
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express para enviar la respuesta HTTP.
 * @returns {Promise<void>} - Envía una respuesta con la lista de usuarios o un mensaje de error.
 */
export const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersDb()
    res.status(200).json(users)
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

/**
  * Crea un cliente con un contacto asociado.
  *
  * @param {object} req - Objeto de solicitud de Express, que contiene los datos del cliente en `req.body`.
  * @param {object} res - Objeto de respuesta de Express para enviar la respuesta HTTP.
  * @returns {Promise<void>} - Envía una respuesta indicando si el registro fue exitoso o si ocurrió un error.
  */
export const registerClientWithContact = async (req, res) => {
  const {
    username,
    firstName,
    contactName,
    contactEmail,
    contactPhone,
    contactJob,
    relationship,
  } = req.body;

  try {
    const existingUser = await verifyExistingUserByUsername(username);
    const existingContact = await verifyExistingContactByContactName(contactName);
    
    // Verificar si el usuario y el contacto ya existen 
    if (existingContact && existingUser) {
      return res.status(400).json({ message: "Contact and user already exists" });
    }if (existingContact) {
      return res.status(400).json({ message: "Contact already exists" });
    } if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const savedUser = await saveClient({ username, firstName });

    const contact = {
      userId: savedUser.userId,       
      contactName,
      contactEmail,
      contactPhone,
      contactJob,
      relationship,
    };

    await saveContact(contact);
    return res.status(201).json({ message: "User and contact created successfully" });
  } catch (e) {
    console.error("Error in registerClientWithContact:", e);
    res.status(500).json({ message: "Something went wrong" });
  }
}

/**
* Obtiene todos los clientes del sistema.
*
* @param {object} req - Objeto de solicitud de Express.
* @param {object} res - Objeto de respuesta de Express para enviar la respuesta HTTP.
* @returns {Promise<void>} - Envía una respuesta con la lista de clientes o un mensaje de error.
*/
export const getAllClients = async (req, res) => {
  try {
    const clients = await getAllClientsDb();
    res.status(200).json(clients);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Something went wrong" });
  }
}


