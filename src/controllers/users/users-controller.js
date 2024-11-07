import { saveUser, verifyExistingUserByUsername, updateUserDb, deleteUserByIdDb, verifyExistingUserById, getAllUsersDb } from '../../repositories/users/user-repository.js'

/**
 * Registra un nuevo usuario en el sistema.
 * Verifica si el nombre de usuario ya existe antes de crear el usuario.
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
    return res.status(400).send('User already exists')
  } else {
    try {
      await saveUser(user)
      res.status(201).send('User created')
    } catch (e) {
      console.error(e)
      res.status(500).send('Something went wrong')
    }
  }
}

/**
 * Actualiza un usuario existente en el sistema.
 * Verifica si el usuario existe antes de realizar la actualización.
 *
 * @param {object} req - Objeto de solicitud de Express, que contiene `userId` en `req.params` y los datos a actualizar en `req.body`.
 * @param {object} res - Objeto de respuesta de Express para enviar la respuesta HTTP.
 * @returns {Promise<void>} - Envía una respuesta indicando si la actualización fue exitosa o si ocurrió un error.
 */
export const updateUser = async (req, res) => {
  const { userId } = req.params
  const {
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
    return res.status(404).send('User not found')
  }

  try {
    await updateUserDb(userId, user)
    res.status(200).send('User updated')
  } catch (e) {
    console.error(e)
    res.status(500).send('Something went wrong')
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
    return res.status(400).send('User ID is required')
  }

  if (!(await verifyExistingUserById(userId))) {
    return res.status(404).send('User not found')
  }

  try {
    await deleteUserByIdDb(userId)
    res.status(200).send('User deleted')
  } catch (e) {
    console.error(e)
    res.status(500).send('Something went wrong')
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
    res.status(200).send(users)
  } catch (e) {
    console.error(e)
    res.status(500).send('Something went wrong')
  }
}
