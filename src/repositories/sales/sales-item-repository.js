import { SalesItem } from '../../models/sales/sales-item.js'
import { Sales } from '../../models/sales/sales-model.js'
import { Product } from '../../models/products/product-model.js'

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

      if (product.quantity < productQuantity) {
        console.error(`Not enough stock for product with ID ${productId}`)
        return
      }

      const unitPrice = itemUnitPrice || product.productPrice
      const subtotal = productQuantity * unitPrice
      salesAmount += subtotal
    }

    if (buyerId === sellerId) {
      console.error('Buyer and seller cannot be the same user')
      return
    }

    if (buyerId !== 3) {
      console.error('buyerId must be 3')
      return
    }

    if (sellerId !== 2 && sellerId !== 1) {
      console.error('Incorrect sellerId')
      return
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
      if (!product) {
        console.error(`Product with ID ${productId} not found`)
        return
      }

      const unitPrice = itemUnitPrice || product.productPrice
      const subtotal = productQuantity * unitPrice

      await SalesItem.create({
        productId,
        productQuantity,
        unitPrice,
        subtotal,
        salesId: newSale.salesId
      })

      product.quantity -= productQuantity
      await product.save()
    }
  } catch (e) {
    console.error(e)
  }
}




export const getSalesDb = async () => {
  try {
    const sales = await Sales.findAll()
    const salesWithItems = {}
    for (const sale of sales) {
      const items = await SalesItem.findAll({
        where: {
          salesId: sale.salesId
        }
      })
      salesWithItems[sale.salesId] = {
        ...sale.dataValues,
        items
      }
    }
    return salesWithItems
  } catch (e) {
    console.error(e)
  }
}
