import { verifyUserCredentials, retrieveUserData } from '../../repositories/users/user-repository.js'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../../config/config.js'

/**
 * Inicia sesión de un usuario verificando sus credenciales y generando un token JWT.
 * Si una sesión ya está activa, devuelve un mensaje de error.
 *
 * @param {object} req - Objeto de solicitud de Express, contiene `username` y `password` en `req.body`.
 * @param {object} res - Objeto de respuesta de Express utilizado para enviar la respuesta HTTP.
 * @returns {Promise<void>} Envía una respuesta con el estado que indica el éxito o fracaso del inicio de sesión.
 */
export const loginUser = async (req, res) => {
  const { username, password } = req.body
  const user = { username, password }

  try {
    const token = req.cookies.token
    if (token) {
      const decoded = jwt.verify(token, JWT_SECRET)
      if (decoded) {
        return res.status(400).send('Sesión ya activa')
      }
    }

    const isUser = await verifyUserCredentials(user)
    if (isUser) {
      const userData = await retrieveUserData(username)
      console.log(userData)
      res.cookie('token', jwt.sign(userData, JWT_SECRET))
      res.status(200).send('Sesión iniciada')
    } else {
      res.status(401).send('Credenciales inválidas')
    }
  } catch (e) {
    console.error(e)
    res.status(500).send('Algo salió mal')
  }
}

/**
 * Recupera los datos de la sesión de un usuario verificado usando el token JWT.
 *
 * @param {object} req - Objeto de solicitud de Express, contiene el token en `req.cookies`.
 * @param {object} res - Objeto de respuesta de Express utilizado para enviar la respuesta HTTP.
 * @returns {Promise<void>} Envía los datos del usuario o un mensaje de error.
 */
export const retrieveUserSessionData = async (req, res) => {
  try {
    const token = req.cookies.token
    const userData = jwt.verify(token, JWT_SECRET)
    res.status(200).send(userData)
  } catch (e) {
    console.error(e)
    res.status(500).send('Algo salió mal')
  }
}

/**
 * Cierra la sesión de un usuario eliminando el token JWT de las cookies.
 *
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express utilizado para enviar la respuesta HTTP.
 * @returns {Promise<void>} Envía una respuesta indicando el éxito o fracaso del cierre de sesión.
 */
export const logoutUser = async (req, res) => {
  try {
    res.clearCookie('token')
    res.status(200).send('Sesión cerrada')
  } catch (e) {
    console.error(e)
    res.status(500).send('Algo salió mal')
  }
}
