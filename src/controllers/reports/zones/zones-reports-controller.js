import { retrieveLeastSalesZone, retrieveTopSalesZone } from '../../../repositories/reports/zones/zones-reports-repository.js'

/**
 * Controlador para obtener la zona con menos ventas.
 *
 * Este controlador llama a la función `retrieveLeastSalesZone` para obtener los datos de la zona con menos ventas.
 * Si se encuentran los datos, responde con el estado HTTP 200 y los datos en formato JSON.
 * Si no se encuentran, responde con el estado HTTP 404 y un mensaje indicando que no se encontró la zona con menos ventas.
 * En caso de error, responde con el estado HTTP 500 y un mensaje de error.
 *
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Envía una respuesta JSON con la zona de menores ventas o un mensaje de error.
 */
export const getLeastSalesZone = async (req, res) => {
  try {
    const leastSalesZone = await retrieveLeastSalesZone()
    if (!leastSalesZone) {
      return res.status(404).json({ message: 'Least sales zone not found' })
    }
    return res.status(200).json(leastSalesZone)
  } catch (error) {
    return res.status(500).send('Error retrieving least sales zone')
  }
}

/**
 * Controlador para obtener la zona con más ventas.
 *
 * Este controlador llama a la función `retrieveTopSalesZone` para obtener los datos de la zona con más ventas.
 * Si se encuentran los datos, responde con el estado HTTP 200 y los datos en formato JSON.
 * Si no se encuentran, responde con el estado HTTP 404 y un mensaje indicando que no se encontró la zona con más ventas.
 * En caso de error, responde con el estado HTTP 500 y un mensaje de error.
 *
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Envía una respuesta JSON con la zona de mayores ventas o un mensaje de error.
 */
export const getTopSalesZone = async (req, res) => {
  try {
    const topSalesZone = await retrieveTopSalesZone()
    if (!topSalesZone) {
      return res.status(404).json({ message: 'Top sales zone not found' })
    }
    return res.status(200).json(topSalesZone)
  } catch (error) {
    res.status(500).send('Error retrieving top sales zone')
  }
}
