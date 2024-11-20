import { retrieveLeastSellingProduct, retrieveTop10Products, retrieveTopSellingProduct } from '../../../repositories/reports/products/products-reports-repository.js'

/**
 * Controlador para obtener el producto con menor venta.
 *
 * Este controlador llama a la función `retrieveLeastSellingProduct` para obtener los datos del producto con menor venta.
 * Si se encuentra el producto, responde con el estado HTTP 200 y los datos del producto en formato JSON.
 * Si no se encuentra, responde con el estado HTTP 404 y un mensaje indicando que no se encontró el producto.
 * En caso de error, responde con el estado HTTP 500 y un mensaje de error.
 *
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Envía una respuesta JSON con el producto de menor venta o un mensaje de error.
 */
export const getLeastSellingProduct = async (req, res) => {
  try {
    const leastSellingProduct = await retrieveLeastSellingProduct()
    if (!leastSellingProduct) {
      return res.status(404).json({ message: 'Least selling product not found' })
    }
    return res.status(200).json(leastSellingProduct)
  } catch (error) {
    return res.status(500).send('Error retrieving least selling product')
  }
}

/**
 * Controlador para obtener los 10 productos más vendidos.
 *
 * Este controlador llama a la función `retrieveTop10Products` para obtener los datos de los 10 productos más vendidos.
 * Si se encuentran los productos, responde con el estado HTTP 200 y los datos en formato JSON.
 * Si no se encuentran, responde con el estado HTTP 404 y un mensaje indicando que no se encontraron los productos.
 * En caso de error, responde con el estado HTTP 500 y un mensaje de error.
 *
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Envía una respuesta JSON con los 10 productos más vendidos o un mensaje de error.
 */
export const getTop10Products = async (req, res) => {
  try {
    const top10Products = await retrieveTop10Products()
    if (!top10Products) {
      return res.status(404).json({ message: 'Top 10 products not found' })
    }
    return res.status(200).json(top10Products)
  } catch (error) {
    res.status(500).send('Error retrieving top 10 products')
  }
}

/**
 * Controlador para obtener el producto más vendido.
 *
 * Este controlador llama a la función `retrieveTopSellingProduct` para obtener los datos del producto más vendido.
 * Si se encuentra el producto, responde con el estado HTTP 200 y los datos del producto en formato JSON.
 * Si no se encuentra, responde con el estado HTTP 404 y un mensaje indicando que no se encontró el producto.
 * En caso de error, responde con el estado HTTP 500 y un mensaje de error.
 *
 * @param {object} req - Objeto de solicitud de Express.
 * @param {object} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Envía una respuesta JSON con el producto más vendido o un mensaje de error.
 */
export const getTopSellingProduct = async (req, res) => {
  try {
    const topSellingProduct = await retrieveTopSellingProduct()
    if (!topSellingProduct) {
      return res.status(404).json({ message: 'Top selling product not found' })
    }
    return res.status(200).json(topSellingProduct)
  } catch (error) {
    res.status(500).send('Error retrieving top selling product')
  }
}
