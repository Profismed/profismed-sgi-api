import { saveUser, verifyExistingUser } from '../../repositories/users/user-repository.js'

/**
 * Registra un nuevo usuario en el sistema.
 * Verifica si el nombre de usuario ya existe antes de crear el usuario.
 *
 * @param {object} req - Objeto de solicitud de Express, contiene los datos del usuario en `req.body`.
 * @param {object} res - Objeto de respuesta de Express utilizado para enviar la respuesta HTTP.
 * @returns {Promise<void>} Envía una respuesta con el estado que indica el éxito o fracaso del registro.
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
    return res.status(400).send('El usuario ya existe')
  } else {
    try {
      await saveUser(user)
      res.status(201).send('Usuario creado')
    } catch (e) {
      console.error(e)
      res.status(500).send('Algo salió mal')
    }
  }
}
