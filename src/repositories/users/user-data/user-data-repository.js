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
