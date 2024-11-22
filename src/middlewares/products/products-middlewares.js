import { Product } from '../../models/products/product-model.js'

/**
 * Middleware para verificar si un producto existe por su ID.
 *
 * @param {Object} req - El objeto de solicitud de Express.
 * @param {Object} res - El objeto de respuesta de Express.
 * @param {Function} next - La función de middleware de Express que se llama para pasar el control al siguiente middleware.
 * @returns {Object|void} - Devuelve una respuesta con un estado 404 y un mensaje de error si el producto no se encuentra, de lo contrario llama a la función next().
 */
export const checkProductExists = async (req, res, next) => {
  const productId = req.params.id
  const product = await Product.findByPk(productId)
  if (!product) {
    return res.status(404).json({ message: 'Product not found' })
  }
  next()
}

/**
 * Middleware para verificar si hay suficiente stock de un producto.
 *
 * @param {Object} req - El objeto de solicitud de Express.
 * @param {Object} res - El objeto de respuesta de Express.
 * @param {Function} next - La función de middleware de Express que se llama para pasar el control al siguiente middleware.
 * @returns {Object|void} - Devuelve una respuesta con un estado 404 si el producto no se encuentra o 400 si no hay suficiente stock, de lo contrario llama a la función next().
 */
export const checkProductStock = async (req, res, next) => {
  const { productId, quantity } = req.body
  const product = await Product.findByPk(productId)
  if (!product) {
    return res.status(404).json({ message: 'Product not found' })
  }
  if (product.stock < quantity) {
    return res.status(400).json({ message: 'Insufficient stock' })
  }
  next()
}

/**
 * Middleware para verificar si un producto con el mismo nombre ya existe.
 *
 * @param {Object} req - El objeto de solicitud de Express.
 * @param {Object} res - El objeto de respuesta de Express.
 * @param {Function} next - La función de middleware de Express que se llama para pasar el control al siguiente middleware.
 * @returns {Object|void} - Devuelve una respuesta con un estado 400 y un mensaje de error si el producto ya existe, de lo contrario llama a la función next().
 */
export const verifyDuplicateProduct = async (req, res, next) => {
  const { productName } = req.body
  const product = await Product.findOne({ where: { productName } })
  if (product) {
    return res.status(400).json({ message: 'Product already exists' })
  }
  next()
}
