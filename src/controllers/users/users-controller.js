import { saveUser, verifyExistingUser } from '../../repositories/users/user-repository.js'

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
  if (await verifyExistingUser(username)) {
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
