import { getRoles, getLocations, getDocuments } from '../../../controllers/users/user-data/user-data-controller.js'
import express from 'express'

export const userDataRouter = express.Router()

/**
 * Ruta para obtener todos los roles disponibles.
 *
 * Define una ruta HTTP GET para `/roles` que invoca la función `getRoles`
 * desde el controlador `user-data-controller.js`. Esta función recupera
 * y envía una lista de roles en formato JSON.
 *
 * @name GET /roles
 * @function
 * @inner
 */
userDataRouter.get('/roles', getRoles)

/**
 * Ruta para obtener todas las ubicaciones disponibles.
 *
 * Define una ruta HTTP GET para `/locations` que invoca la función `getLocations`
 * desde el controlador `user-data-controller.js`. Esta función recupera
 * y envía una lista de ubicaciones en formato JSON.
 *
 * @name GET /locations
 * @function
 * @inner
 */
userDataRouter.get('/locations', getLocations)

/**
 * Ruta para obtener todos los documentos disponibles.
 *
 * Define una ruta HTTP GET para `/documents` que invoca la función `getDocuments`
 * desde el controlador `user-data-controller.js`. Esta función recupera
 * y envía una lista de documentos en formato JSON.
 *
 * @name GET /documents
 * @function
 * @inner
 */
userDataRouter.get('/documents', getDocuments)
