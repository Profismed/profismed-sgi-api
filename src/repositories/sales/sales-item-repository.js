import { SalesItem } from '../../models/sales/sales-item.js'
import { Sales } from '../../models/sales/sales-model.js'
import { Product } from '../../models/products/product-model.js' // Import the Product model

/**
 * Guarda una nueva venta en la base de datos, incluyendo los elementos de la venta.
 *
 * @param {object} sale - Objeto que contiene los datos de la venta.
 * @param {number} sale.salesAmount - Monto total de la venta.
 * @param {number} sale.buyerId - ID del comprador.
 * @param {number} sale.sellerId - ID del vendedor.
 * @param {Array} sale.items - Lista de elementos de la venta, cada uno conteniendo información del producto.
 * @param {number} sale.items[].productId - ID del producto.
 * @param {number} sale.items[].productQuantity - Cantidad del producto en la venta.
 * @returns {Promise<void>} - Indica el éxito o fallo de la operación.
 */
export const saveSale = async (sale) => {
  const { buyerId, sellerId, items } = sale
  try {
    let salesAmount = 0

    // Calculate the total sales amount
    for (const item of items) {
      const { productId, productQuantity } = item

      // Fetch the product price from the database
      const product = await Product.findByPk(productId)
      if (!product) {
        console.error(`Product with ID ${productId} not found`)
        return // Exit the function if the product is not found
      }

      const unitPrice = product.productPrice // Ensure the correct field name is used
      const subtotal = productQuantity * unitPrice
      salesAmount += subtotal
    }

    // Create the new sale with the calculated sales amount
    const newSale = await Sales.create({
      salesAmount,
      buyerId,
      sellerId
    })

    // Create the sales items
    for (const item of items) {
      const { productId, productQuantity } = item

      const product = await Product.findByPk(productId)
      const unitPrice = product.productPrice
      const subtotal = productQuantity * unitPrice

      await SalesItem.create({
        productId,
        productQuantity,
        unitPrice,
        subtotal,
        salesId: newSale.salesId
      })
    }
  } catch (e) {
    console.error(e)
  }
}
