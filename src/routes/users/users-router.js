import express from 'express'
import { registerUser, updateUser, deleteUser, getAllUsers, registerClient, registerClientWithContact, getAllClients} from '../../controllers/users/users-controller.js'
import { isSessionActive } from '../../middlewares/auth/auth-middlewares.js'
import cookieParser from 'cookie-parser'

import { userDataRouter } from '../users/user-data/user-data-router.js'

export const usersRouter = express.Router()

/**
 * Middleware para analizar el cuerpo de las solicitudes como JSON.
 *
 * Utiliza `express.json()` para asegurarse de que todas las solicitudes
 * entrantes que contienen un cuerpo en formato JSON sean correctamente procesadas.
 */
usersRouter.use(express.json())

/**
 * Middleware para habilitar el análisis de cookies.
 *
 * Utiliza `cookie-parser()` para habilitar el análisis de las cookies
 * que puedan estar presentes en las solicitudes entrantes.
 */
usersRouter.use(cookieParser())

// Ruta para manejar los datos de usuario (roles, documentos y ubicaciones)
usersRouter.use('/data', userDataRouter)

/**
 * Middleware para verificar que la sesión esté activa antes de permitir
 * el acceso a las rutas protegidas.
 *
 * Llama a la función `isSessionActive` para asegurar que el usuario esté autenticado.
 * Si la sesión no está activa, se denegará el acceso a las rutas protegidas.
 */
usersRouter.use(isSessionActive)

/**
 * Ruta para registrar un nuevo usuario.
 *
 * Llama a la función `registerUser` del controlador para crear un nuevo usuario.
 * La solicitud debe ser un `POST` a `/register`, enviando los datos del usuario
 * en el cuerpo de la solicitud.
 *
 * @name POST /register
 * @path {POST} /register
 */
usersRouter.post('/register', registerUser)

/**
  * Ruta para obtener los datos de un usuario.
  *
  * Llama a la función `registerClient` del controlador para obtener los datos de un usuario.
  * La solicitud debe ser un `GET` a `/data/:userId`, donde `:userId` es el identificador del usuario.
  * en el cuerpo de la solicitud.
  *
  * @name GET /data/:userId
  * @path {GET} /data/:userId
  */
usersRouter.post('/register-contact/', registerClientWithContact)

/**
  * Ruta para crear un nuevo cliente.
  * Verifica si el nombre de usuario ya existe antes de crear el usuario.
  *
  * @name POST /register-client
  * @path {POST} /register-client
  */
usersRouter.post('/register-client', registerClient)

/**
 * Ruta para actualizar un usuario existente.
 *
 * Llama a la función `updateUser` del controlador para actualizar los datos
 * de un usuario. La solicitud debe ser un `PUT` a `/update/:userId`, donde
 * `:userId` es el identificador del usuario a actualizar.
 *
 * @name PUT /update/:userId
 * @path {PUT} /update/:userId
 */
usersRouter.put('/update/:userId', updateUser)

/**
 * Ruta para eliminar (desactivar) un usuario.
 *
 * Llama a la función `deleteUser` del controlador para eliminar (marcar como inactivo)
 * un usuario del sistema. La solicitud debe ser un `DELETE` a `/delete/:userId`,
 * donde `:userId` es el identificador del usuario a eliminar.
 *
 * @name DELETE /delete/:userId
 * @path {DELETE} /delete/:userId
 */
usersRouter.delete('/delete/:userId', deleteUser)

/**
 * Ruta para obtener todos los usuarios que no son administradores.
 *
 * Llama a la función `getAllUsers` del controlador para obtener la lista de usuarios
 * que no tienen el rol de administrador. La solicitud debe ser un `GET` a `/all`.
 *
 * @name GET /all
 * @path {GET} /all
 */
usersRouter.get('/all', getAllUsers)

/**
* Ruta para obtener todos los clientes.
* Llama a la función `getAllClients` del controlador para obtener la lista de clientes.
* La solicitud debe ser un `GET` a `/all-clients`. 
*
* @name GET /all-clients
* @path {GET} /all-clients
*/
usersRouter.get('/all-clients', getAllClients)
