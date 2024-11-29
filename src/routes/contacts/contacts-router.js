import express from 'express'
import {
  getAllContacts,
  getContactById,
  getContactsByUserId,
  registerContact,
  updateExistentContact,
  deleteContact
} from '../../controllers/contacts/contacts-controller.js'
import { isSessionActive } from '../../middlewares/auth/auth-middlewares.js'
import cookieParser from 'cookie-parser'

export const contactsRouter = express.Router()

/**
 * Middleware para analizar el cuerpo de las solicitudes como JSON.
 *
 * Utiliza `express.json()` para asegurarse de que todas las solicitudes
 * entrantes que contienen un cuerpo en formato JSON sean correctamente procesadas.
 */
contactsRouter.use(express.json())

/**
 * Middleware para habilitar el análisis de cookies.
 *
 * Utiliza `cookie-parser()` para habilitar el análisis de las cookies
 * que puedan estar presentes en las solicitudes entrantes.
 */
contactsRouter.use(cookieParser())

/**
 * Middleware para verificar que la sesión esté activa antes de permitir
 * el acceso a las rutas protegidas.
 *
 * Llama a la función `isSessionActive` para asegurar que el usuario esté autenticado.
 * Si la sesión no está activa, se denegará el acceso a las rutas protegidas.
 */
contactsRouter.use(isSessionActive)

/**
 * Ruta para obtener todos los contactos.
 *
 * Llama a la función `getContacts` del controlador para recuperar todos los contactos.
 * La solicitud debe ser un `GET` a `/contacts`.
 *
 * @name GET /contacts
 * @path {GET} /contacts
 */
contactsRouter.get('/', getAllContacts)

/**
 * Ruta para obtener los contactos de un usuario.
 *
 * Llama a la función `getContactsByUserId` del controlador para recuperar los contactos de un usuario.
 * La solicitud debe ser un `GET` a `/contacts/user/:userId`, donde `:userId` es el identificador del usuario.
 *
 * @name GET /contacts/user/:userId
 * @path {GET} /contacts/user/:userId
 * @query {number} userId - El ID del usuario para recuperar sus contactos.
 * @code {200} - Devuelve los contactos del usuario.
 */
contactsRouter.get('/user/:userId', getContactsByUserId)

/**
 * Ruta para obtener un contacto por su ID.
 *
 * Llama a la función `getContact` del controlador para recuperar un contacto específico.
 * La solicitud debe ser un `GET` a `/contacts/:contactId`, donde `:contactId` es el identificador del contacto.
 *
 * @name GET /contacts/:contactId
 * @path {GET} /contacts/:contactId
 */
contactsRouter.get('/:contactId', getContactById)

/**
 * Ruta para crear un nuevo contacto.
 *
 * Llama a la función `createContact` del controlador para crear un nuevo contacto.
 * La solicitud debe ser un `POST` a `/contacts`, enviando los datos del contacto en el cuerpo de la solicitud.
 *
 * @name POST /contacts
 * @path {POST} /contacts
 */
contactsRouter.post('/register', registerContact)

/**
 * Ruta para actualizar un contacto existente.
 *
 * Llama a la función `updateExistentContact` del controlador para actualizar los datos de un contacto.
 * La solicitud debe ser un `PUT` a `/contacts/:contactId`, donde `:contactId` es el identificador del contacto a actualizar.
 *
 * @name PUT /contacts/:contactId
 * @path {PUT} /contacts/:contactId
 */
contactsRouter.put('/contact/:contactId', updateExistentContact)

/**
 * Ruta para eliminar un contacto.
 *
 * Llama a la función `deleteContact` del controlador para eliminar un contacto de la base de datos.
 * La solicitud debe ser un `DELETE` a `/contacts/:contactId`, donde `:contactId` es el identificador del contacto a eliminar.
 *
 * @name DELETE /contacts/:contactId
 * @path {DELETE} /contacts/:contactId
 */
contactsRouter.delete('/:contactId', deleteContact)
