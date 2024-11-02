import express from 'express'
import { registerUser } from '../../controllers/users/users-controller.js'
import { loginUser, logoutUser, retrieveUserSessionData } from '../../controllers/auth/auth-controller.js'
import { isSessionActive } from "../../middlewares/auth/auth-middlewares.js"
import cookieParser from 'cookie-parser'

export const router = express.Router()

// Middleware para parsear JSON en las solicitudes
router.use(express.json())

/**
 * Ruta para registrar un nuevo usuario.
 * Llama a la función `registerUser` del controlador.
 *
 * @name POST /register
 */
router.post('/register', registerUser)

/**
 * Ruta para cerrar sesión del usuario.
 * Llama a la función `logoutUser` del controlador.
 *
 * @name POST /logout
 */
router.post('/logout', logoutUser)

// Middleware para manejar cookies
router.use(cookieParser())

/**
 * Ruta para iniciar sesión de un usuario.
 * Llama a la función `loginUser` del controlador.
 *
 * @name POST /login
 */
router.post('/login', loginUser)

// Middleware para verificar si la sesión está activa antes de acceder a rutas protegidas
router.use(isSessionActive)

/**
 * Ruta para recuperar los datos de la sesión de un usuario autenticado.
 * Llama a la función `retrieveUserSessionData` del controlador.
 *
 * @name GET /userData
 */
router.get('/userData', retrieveUserSessionData)
