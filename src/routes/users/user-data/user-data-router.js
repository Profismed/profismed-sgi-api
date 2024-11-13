import { getRoles, getLocations, getDocuments, getDocumentById, getLocationById, getRoleById } from '../../../controllers/users/user-data/user-data-controller.js'
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

/**
 * Ruta para obtener un rol específico por su ID.
 *
 * Define una ruta HTTP GET para `/roles/:roleId` que invoca la función `getRoleById`
 * desde el controlador `user-data-controller.js`. Esta función recupera un rol específico
 * usando el `roleId` proporcionado en la URL como parámetro y devuelve los datos del rol en formato JSON.
 *
 * @name GET /roles/:roleId
 * @function
 * @inner
 */
userDataRouter.get('/roles/:roleId', getRoleById)

/**
 * Ruta para obtener una ubicación específica por su ID.
 *
 * Define una ruta HTTP GET para `/locations/:locationId` que invoca la función `getLocationById`
 * desde el controlador `user-data-controller.js`. Esta función recupera una ubicación específica
 * usando el `locationId` proporcionado en la URL como parámetro y devuelve los datos de la ubicación en formato JSON.
 *
 * @name GET /locations/:locationId
 * @function
 * @inner
 */
userDataRouter.get('/locations/:locationId', getLocationById)

/**
 * Ruta para obtener un documento específico por su ID.
 *
 * Define una ruta HTTP GET para `/documents/:documentId` que invoca la función `getDocumentById`
 * desde el controlador `user-data-controller.js`. Esta función recupera un documento específico
 * usando el `documentId` proporcionado en la URL como parámetro y devuelve los datos del documento en formato JSON.
 *
 * @name GET /documents/:documentId
 * @function
 * @inner
 */
userDataRouter.get('/documents/:documentId', getDocumentById)
