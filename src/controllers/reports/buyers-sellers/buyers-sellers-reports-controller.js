import { retrieveTopSellers, retrieveTopBuyers } from '../../../repositories/reports/buyers-sellers/buyers-sellers-reports-repository.js'

/**
 * Controlador para obtener los principales compradores.
 *
 * Este controlador llama a la función `retrieveTopBuyers` para obtener los datos de los principales compradores.
 * Si se encuentran los datos, responde con el estado HTTP 200 y los datos de los compradores en formato JSON.
 * Si no se encuentran datos, responde con el estado HTTP 404 y un mensaje indicando que no se encontraron compradores.
 * En caso de error, responde con el estado HTTP 500 y un mensaje de error.
 *
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Envía una respuesta JSON con los principales compradores o un mensaje de error.
 */
export const getTopBuyers = async (req, res) => {
  try {
    const topBuyers = await retrieveTopBuyers()
    if (!topBuyers) {
      return res.status(404).json({ message: 'Top buyers not found' })
    }
    return res.status(200).json(topBuyers)
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving top buyers' })
  }
}

/**
 * Controlador para obtener los principales vendedores.
 *
 * Este controlador llama a la función `retrieveTopSellers` para obtener los datos de los principales vendedores.
 * Si se encuentran los datos, responde con el estado HTTP 200 y los datos de los vendedores en formato JSON.
 * Si no se encuentran datos, responde con el estado HTTP 404 y un mensaje indicando que no se encontraron vendedores.
 * En caso de error, responde con el estado HTTP 500 y un mensaje de error.
 *
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Envía una respuesta JSON con los principales vendedores o un mensaje de error.
 */
export const getTopSellers = async (req, res) => {
  try {
    const topSellers = await retrieveTopSellers()
    if (!topSellers) {
      return res.status(404).json({ message: 'Top sellers not found' })
    }
    return res.status(200).json(topSellers)
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving top sellers' })
  }
}
