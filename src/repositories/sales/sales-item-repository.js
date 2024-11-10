import {SalesItem} from '../../models/sales/sales-item.js'
import {Sales} from '../../models/sales/sales-model.js'
import {Product} from '../../models/products/product-model.js'

/**
 * Guarda una nueva venta en la base de datos, incluyendo los elementos de la venta.
 *
 * @param {object} sale - Objeto que contiene los datos de la venta.
 * @param {number} sale.buyerId - ID del comprador.
 * @param {number} sale.sellerId - ID del vendedor.
 * @param {Array} sale.items - Lista de elementos de la venta, cada uno conteniendo información del producto.
 * @param {number} sale.items[].productId - ID del producto.
 * @param {number} sale.items[].productQuantity - Cantidad del producto en la venta.
 * @returns {Promise<void>} - Indica el éxito o fallo de la operación.
 */
export const saveSale = async (sale) => {
  const { buyerId, sellerId, items, saleDate } = sale
  try {
    let salesAmount = 0

    for (const item of items) {
      const { productId, productQuantity, unitPrice: itemUnitPrice } = item

      const product = await Product.findByPk(productId)
      if (!product) {
        console.error(`Product with ID ${productId} not found`)
        return
      }

      const unitPrice = itemUnitPrice || product.productPrice
      const subtotal = productQuantity * unitPrice
      salesAmount += subtotal
    }

    const newSale = await Sales.create({
      salesAmount,
      buyerId,
      sellerId,
      saleDate
    })

    for (const item of items) {
      const { productId, productQuantity, unitPrice: itemUnitPrice } = item

      const product = await Product.findByPk(productId)
      const unitPrice = itemUnitPrice || product.productPrice
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

export const getSales = async () => {
  try {
    const sales = await Sales.findAll()
  for (const sale of sales) {
    const items = await SalesItem.findAll({ where: { salesId: sale.salesId } })
    sale.dataValues.items = items
    }
  } catch (e) {
    console.error(e)
  }
}
