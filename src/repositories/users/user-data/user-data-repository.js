import { Document } from '../../../models/user/user-data/documents-model.js'
import { Location } from '../../../models/user/user-data/locations-model.js'
import { Role } from '../../../models/user/user-data/roles-model.js'

/**
 * Recupera todos los documentos disponibles en la base de datos.
 *
 * Esta función utiliza el modelo `Document` para obtener todos los registros de la tabla correspondiente a los documentos.
 * En caso de que ocurra un error durante la operación, se captura y se muestra en la consola.
 *
 * @returns {Promise<Array|undefined>} - Devuelve una lista de todos los documentos o `undefined` si ocurre un error.
 */
export const retrieveDocuments = async () => {
  try {
    return await Document.findAll()
  } catch (e) {
    console.error(e)
  }
}

/**
 * Recupera todas las ubicaciones disponibles en la base de datos.
 *
 * Esta función utiliza el modelo `Location` para obtener todos los registros de la tabla correspondiente a las ubicaciones.
 * En caso de que ocurra un error durante la operación, se captura y se muestra en la consola.
 *
 * @returns {Promise<Array|undefined>} - Devuelve una lista de todas las ubicaciones o `undefined` si ocurre un error.
 */
export const retrieveLocations = async () => {
  try {
    return await Location.findAll()
  } catch (e) {
    console.error(e)
  }
}

/**
 * Recupera todos los roles disponibles en la base de datos.
 *
 * Esta función utiliza el modelo `Role` para obtener todos los registros de la tabla correspondiente a los roles.
 * En caso de que ocurra un error durante la operación, se captura y se muestra en la consola.
 *
 * @returns {Promise<Array|undefined>} - Devuelve una lista de todos los roles o `undefined` si ocurre un error.
 */
export const retrieveRoles = async () => {
  try {
    return await Role.findAll()
  } catch (e) {
    console.error(e)
  }
}

/**
 * Recupera un rol específico de la base de datos mediante su identificador.
 *
 * Esta función utiliza el modelo `Role` para obtener un único registro de la tabla de roles,
 * identificado por el `roleId` proporcionado.
 * En caso de que ocurra un error durante la operación, se captura y se muestra en la consola.
 *
 * @param {number} roleId - El identificador del rol que se desea recuperar.
 * @returns {Promise<Object|undefined>} - Devuelve el rol encontrado o `undefined` si ocurre un error.
 */
export const retrieveRoleById = async (roleId) => {
    try {
        return await Role.findByPk(roleId)
    } catch (e) {
        console.error(e)
    }
}

/**
 * Recupera un documento específico de la base de datos mediante su identificador.
 *
 * Esta función utiliza el modelo `Document` para obtener un único registro de la tabla de documentos,
 * identificado por el `documentId` proporcionado.
 * En caso de que ocurra un error durante la operación, se captura y se muestra en la consola.
 *
 * @param {number} documentId - El identificador del documento que se desea recuperar.
 * @returns {Promise<Object|undefined>} - Devuelve el documento encontrado o `undefined` si ocurre un error.
 */
export const retrieveDocumentById = async (documentId) => {
    try {
        return await Document.findByPk(documentId)
    } catch (e) {
        console.error(e)
    }
}

/**
 * Recupera una ubicación específica de la base de datos mediante su identificador.
 *
 * Esta función utiliza el modelo `Location` para obtener un único registro de la tabla de ubicaciones,
 * identificado por el `locationId` proporcionado.
 * En caso de que ocurra un error durante la operación, se captura y se muestra en la consola.
 *
 * @param {number} locationId - El identificador de la ubicación que se desea recuperar.
 * @returns {Promise<Object|undefined>} - Devuelve la ubicación encontrada o `undefined` si ocurre un error.
 */
export const retrieveLocationById = async (locationId) => {
    try {
        return await Location.findByPk(locationId)
    } catch (e) {
        console.error(e)
    }
}
