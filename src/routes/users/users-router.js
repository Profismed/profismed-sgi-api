import express from 'express'
import { registerUser, updateUser, deleteUser, getAllUsers } from '../../controllers/users/users-controller.js'
import { isSessionActive } from '../../middlewares/auth/auth-middlewares.js'
import cookieParser from 'cookie-parser'

export const usersRouter = express.Router()

/**
 * Middleware para analizar el cuerpo de las solicitudes como JSON.
 */
usersRouter.use(express.json())

/**
 * Middleware para habilitar el análisis de cookies.
 */
usersRouter.use(cookieParser())

/**
 * Ruta para registrar un nuevo usuario.
 * Llama a la función `registerUser` del controlador.
 *
 * @name POST /register
 * @path {POST} /register
 */
usersRouter.post('/register', registerUser)

/**
 * Middleware para verificar que la sesión esté activa antes de permitir
 * el acceso a las rutas protegidas. Llama a la función `isSessionActive` para
 * asegurar que el usuario esté autenticado.
 */
usersRouter.use(isSessionActive)

/**
 * Ruta para actualizar un usuario.
 * Llama a la función `updateUser` del controlador.
 *
 * @name PUT /update/:userId
 * @path {PUT} /update/:userId
 */
usersRouter.put('/update/:userId', updateUser)

/**
 * Ruta para eliminar un usuario.
 * Llama a la función `deleteUser` del controlador.
 *
 * @name DELETE /delete/:userId
 * @path {DELETE} /delete/:userId
 */
usersRouter.delete('/delete/:userId', deleteUser)

/**
 * Ruta para obtener todos los usuarios que no son administradores.
 * Llama a la función `getAllUsers` del controlador.
 *
 * @name GET /all
 * @path {GET} /all
 */
usersRouter.get('/all', getAllUsers)
