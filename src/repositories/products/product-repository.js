import { Product } from '../../models/products/product-model.js'

/**
 * Guarda un nuevo producto en la base de datos.
 *
 * @param {object} product - Objeto que contiene los datos del producto a guardar.
 * @param {string} product.productName - Nombre del producto.
 * @param {string} product.productDescription - Descripción del producto.
 * @param {number} product.productPrice - Precio del producto.
 * @param {number} product.quantity - Cantidad de unidades del producto.
 * @param {number} product.userId - ID del usuario que creó el producto.
 * @returns {Promise<void>} - Indica el éxito o fallo de la operación.
 */
export const saveProduct = async (product) => {
  const { productName, productDescription, productPrice, quantity, userId } = product
  try {
    await Product.create({
      productName,
      productDescription,
      productPrice,
      quantity,
      userId
    })
  } catch (e) {
    console.error(e)
  }
}

/**
 * Obtiene todos los productos disponibles de la base de datos.
 *
 * @returns {Promise<Array>} - Lista de productos disponibles.
 */
export const getProducts = async () => {
  try {
    return await Product.findAll({
      where: {
        isAvailable: 1
      }
    })
  } catch (e) {
    console.error(e)
  }
}

/**
 * Actualiza un producto existente en la base de datos.
 *
 * @param {object} product - Objeto que contiene los datos actualizados del producto.
 * @param {number} productId - ID del producto a actualizar.
 * @returns {Promise<void>} - Indica el éxito o fallo de la operación.
 */
export const updateProductDB = async (product, productId) => {
  const { productName, productDescription, productPrice, quantity, userId } = product
  try {
    await Product.update({
      productName,
      productDescription,
      productPrice,
      quantity,
      userId
    }, {
      where: {
        productId
      }
    })
  } catch (e) {
    console.error(e)
  }
}

/**
 * Marca un producto como no disponible en la base de datos.
 *
 * @param {number} productId - ID del producto a marcar como no disponible.
 * @returns {Promise<void>} - Indica el éxito o fallo de la operación.
 */
export const deleteProductDB = async (productId) => {
  try {
    await Product.update(
      { isAvailable: 0 },
      {
        where: {
          productId
        }
      }
    )
  } catch (e) {
    console.error(e)
  }
}
