import { retrieveMonthlySales, retrieveSalesProducts, retrieveSalesProductsSummary } from '../../../repositories/reports/sales/sales-reports-repository.js'

/**
 * Controlador para obtener las ventas mensuales.
 *
 * Este controlador llama a la función `retrieveMonthlySales` para obtener los datos de ventas mensuales.
 * Si se encuentran los datos, responde con el estado HTTP 200 y los datos en formato JSON.
 * Si no se encuentran, responde con el estado HTTP 404 y un mensaje indicando que no se encontraron los datos.
 * En caso de error, responde con el estado HTTP 500 y un mensaje de error.
 *
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Envía una respuesta JSON con las ventas mensuales o un mensaje de error.
 */
export const getMonthlySales = async (req, res) => {
  try {
    const monthlySales = await retrieveMonthlySales()
    if (!monthlySales) {
      return res.status(404).json({ message: 'Monthly sales not found' })
    }
    return res.status(200).json(monthlySales)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

/**
 * Controlador para obtener los productos de las ventas.
 *
 * Este controlador llama a la función `retrieveSalesProducts` para obtener los productos vendidos en las ventas.
 * Si se encuentran los datos, responde con el estado HTTP 200 y los datos en formato JSON.
 * Si no se encuentran, responde con el estado HTTP 404 y un mensaje indicando que no se encontraron los datos.
 * En caso de error, responde con el estado HTTP 500 y un mensaje de error.
 *
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Envía una respuesta JSON con los productos de las ventas o un mensaje de error.
 */
export const getSalesProducts = async (req, res) => {
  try {
    const salesProducts = await retrieveSalesProducts()
    if (!salesProducts) {
      return res.status(404).json({ message: 'Sales products not found' })
    }
    return res.status(200).json(salesProducts)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

/**
 * Controlador para obtener el resumen de productos vendidos.
 *
 * Este controlador llama a la función `retrieveSalesProductsSummary` para obtener el resumen de productos vendidos.
 * Si se encuentran los datos, responde con el estado HTTP 200 y los datos en formato JSON.
 * Si no se encuentran, responde con el estado HTTP 404 y un mensaje indicando que no se encontraron los datos.
 * En caso de error, responde con el estado HTTP 500 y un mensaje de error.
 *
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Envía una respuesta JSON con el resumen de productos vendidos o un mensaje de error.
 */
export const getSalesProductsSummary = async (req, res) => {
  try {
    const salesProductsSummary = await retrieveSalesProductsSummary()
    if (!salesProductsSummary) {
      return res.status(404).json({ message: 'Sales products summary not found' })
    }
    return res.status(200).json(salesProductsSummary)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
