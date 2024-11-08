import express from 'express'
import { loginUser, logoutUser, retrieveUserSessionData } from '../../controllers/auth/auth-controller.js'
import { isSessionActive } from '../../middlewares/auth/auth-middlewares.js'
import cookieParser from 'cookie-parser'

export const authRouter = express.Router()

/**
 * Middleware para analizar el cuerpo de las solicitudes como JSON.
 */
authRouter.use(express.json())

/**
 * Middleware para habilitar el análisis de cookies.
 */
authRouter.use(cookieParser())

/**
 * Ruta para iniciar sesión de un usuario.
 * Llama a la función `loginUser` del controlador.
 *
 * @name POST /login
 * @path {POST} /login
 */
authRouter.post('/login', loginUser)

/**
 * Ruta para cerrar sesión del usuario.
 * Llama a la función `logoutUser` del controlador.
 *
 * @name POST /logout
 * @path {POST} /logout
 */
authRouter.post('/logout', logoutUser)

/**
 * Middleware para verificar si la sesión está activa antes de acceder a rutas protegidas.
 * Llama a la función `isSessionActive` para asegurar que el usuario esté autenticado.
 */
authRouter.use(isSessionActive)

/**
 * Ruta para recuperar los datos de la sesión de un usuario autenticado.
 * Llama a la función `retrieveUserSessionData` del controlador.
 *
 * @name GET /userData
 * @path {GET} /userData
 */
authRouter.get('/userData', retrieveUserSessionData)
