import { retrieveRoles, retrieveDocuments, retrieveLocations, retrieveRoleById, retrieveDocumentById, retrieveLocationById } from '../../../repositories/users/user-data/user-data-repository.js'

/**
 * Controlador para obtener todos los roles disponibles.
 *
 * Este controlador llama a la función `retrieveRoles` para recuperar todos los registros de roles.
 * Si la operación es exitosa, envía una respuesta con el estado HTTP 200 y los datos de los roles.
 * En caso de error, registra el error en la consola y envía una respuesta con el estado HTTP 500.
 *
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Envía una respuesta JSON con los roles o un mensaje de error.
 */
export const getRoles = async (req, res) => {
  try {
    const roles = await retrieveRoles()
    res.status(200).json(roles)
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

/**
 * Controlador para obtener todos los documentos disponibles.
 *
 * Este controlador llama a la función `retrieveDocuments` para recuperar todos los registros de documentos.
 * Si la operación es exitosa, envía una respuesta con el estado HTTP 200 y los datos de los documentos.
 * En caso de error, registra el error en la consola y envía una respuesta con el estado HTTP 500.
 *
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Envía una respuesta JSON con los documentos o un mensaje de error.
 */
export const getDocuments = async (req, res) => {
  try {
    const documents = await retrieveDocuments()
    res.status(200).json(documents)
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

/**
 * Controlador para obtener todas las ubicaciones disponibles.
 *
 * Este controlador llama a la función `retrieveLocations` para recuperar todos los registros de ubicaciones.
 * Si la operación es exitosa, envía una respuesta con el estado HTTP 200 y los datos de las ubicaciones.
 * En caso de error, registra el error en la consola y envía una respuesta con el estado HTTP 500.
 *
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Envía una respuesta JSON con las ubicaciones o un mensaje de error.
 */
export const getLocations = async (req, res) => {
  try {
    const locations = await retrieveLocations()
    res.status(200).json(locations)
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

/**
 * Controlador para obtener un rol específico por su identificador.
 *
 * Este controlador llama a la función `retrieveRoleById` para recuperar un único rol utilizando el `roleId`
 * proporcionado como parámetro de la solicitud.
 * Si la operación es exitosa, envía una respuesta con el estado HTTP 200 y los datos del rol.
 * En caso de error, registra el error en la consola y envía una respuesta con el estado HTTP 500.
 *
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Envía una respuesta JSON con el rol o un mensaje de error.
 */
export const getRoleById = async (req, res) => {
  const { roleId } = req.params
  try {
    const role = await retrieveRoleById(roleId)
    res.status(200).json(role)
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

/**
 * Controlador para obtener un documento específico por su identificador.
 *
 * Este controlador llama a la función `retrieveDocumentById` para recuperar un único documento utilizando el `documentId`
 * proporcionado como parámetro de la solicitud.
 * Si la operación es exitosa, envía una respuesta con el estado HTTP 200 y los datos del documento.
 * En caso de error, registra el error en la consola y envía una respuesta con el estado HTTP 500.
 *
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Envía una respuesta JSON con el documento o un mensaje de error.
 */
export const getDocumentById = async (req, res) => {
  const { documentId } = req.params
  try {
    const document = await retrieveDocumentById(documentId)
    res.status(200).json(document)
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
}

/**
 * Controlador para obtener una ubicación específica por su identificador.
 *
 * Este controlador llama a la función `retrieveLocationById` para recuperar una única ubicación utilizando el `locationId`
 * proporcionado como parámetro de la solicitud.
 * Si la operación es exitosa, envía una respuesta con el estado HTTP 200 y los datos de la ubicación.
 * En caso de error, registra el error en la consola y envía una respuesta con el estado HTTP 500.
 *
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Envía una respuesta JSON con la ubicación o un mensaje de error.
 */
export const getLocationById = async (req, res) => {
  const { locationId } = req.params
  try {
    const location = await retrieveLocationById(locationId)
    res.status(200).json(location)
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Something went wrong' })
  }
}
