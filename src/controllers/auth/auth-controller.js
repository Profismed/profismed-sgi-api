import { verifyUserCredentials, retrieveUserData, retrieveUserDataByEmail } from '../../repositories/users/user-repository.js'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../../config/config.js'

/**
 * Autentica un usuario y genera un token JWT para la sesión.
 * Si el usuario ya tiene una sesión activa, responde con un error.
 *
 * @param {object} req - Objeto de solicitud de Express, que contiene `email` y `password` en `req.body`.
 * @param {object} res - Objeto de respuesta de Express para enviar la respuesta HTTP.
 * @returns {Promise<void>} - Responde con un mensaje de éxito si las credenciales son válidas, o con un mensaje de error en caso contrario.
 */
export const loginUser = async (req, res) => {
  const { email, password } = req.body
  const user = { email, password }

  try {
    const token = req.cookies.token
    if (token) {
      const decoded = jwt.verify(token, JWT_SECRET)
      if (decoded) {
        return res.status(400).json({ message: 'Session already active' })
      }
    }

    const isUser = await verifyUserCredentials(user)
    if (isUser) {
      const userData = await retrieveUserDataByEmail(email)

      const token = jwt.sign(userData, JWT_SECRET, { expiresIn: '3h' })

      res.cookie('token', token, { httpOnly: true, secure: true, maxAge: 10800000 })
      res.status(200).json({ message: 'Logged in' })
    } else {
      res.status(401).json({ message: 'Invalid credentials' })
    }
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

/**
 * Recupera los datos de la sesión del usuario autenticado utilizando el token JWT.
 *
 * @param {object} req - Objeto de solicitud de Express, que contiene el token en `req.cookies`.
 * @param {object} res - Objeto de respuesta de Express para enviar la respuesta HTTP.
 * @returns {Promise<void>} - Responde con los datos del usuario si el token es válido.
 */
export const retrieveUserSessionData = async (req, res) => {
  try {
    const token = req.cookies.token
    const userData = jwt.verify(token, JWT_SECRET)
    res.status(200).json(userData)
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

/**
 * Cierra la sesión del usuario eliminando el token JWT de las cookies.
 *
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express para enviar la respuesta HTTP.
 * @returns {Promise<void>} - Responde con un mensaje de éxito al cerrar la sesión.
 */
export const logoutUser = async (req, res) => {
  try {
    res.clearCookie('token', {
      httpOnly: true,
      secure: true,
      sameSite: 'none'
    })
    res.status(200).json({ message: 'Logged out' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
}


/**
 * Verifica si el usuario tiene una sesión activa.
 *
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express para enviar la respuesta HTTP.
 * @returns {Promise<void>} - Responde con `sessionActive: true` si el usuario tiene una sesión activa, o `sessionActive: false` en caso contrario.
 */
export const verifyUserSession = async (req, res) => {
  try {
    const token = req.cookies.token
    if (!token) {
      return res.status(401).json({ sessionActive: false })
    }
    const decoded = jwt.verify(token, JWT_SECRET)
    if (decoded) {
      return res.status(200).json({ sessionActive: true })
    }
  } catch (e) {
    console.error(e)
    res.status(401).json({ sessionActive: false })
  }
}
