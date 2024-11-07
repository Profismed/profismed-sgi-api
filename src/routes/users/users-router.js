import express from 'express'
import { registerUser, updateUser, deleteUser, getAllUsers } from '../../controllers/users/users-controller.js'

export const usersRouter = express.Router()

usersRouter.use(express.json())

/**
 * Ruta para registrar un nuevo usuario.
 * Llama a la función `registerUser` del controlador.
 *
 * @name POST /register
 */
usersRouter.post('/register', registerUser)

/**
 * Ruta para actualizar un usuario.
 * Llama a la función `updateUser` del controlador.
 *
 * @name PUT /update/:userId
 */
usersRouter.put('/update/:userId', updateUser)

/**
 * Ruta para eliminar un usuario.
 * Llama a la función `deleteUser` del controlador.
 *
 * @name DELETE /delete/:userId
 */
usersRouter.delete('/delete/:userId', deleteUser)

usersRouter.get('/all', getAllUsers)
