import { SalesItem } from '../../models/sales/sales-item.js'
import { Sales } from '../../models/sales/sales-model.js'
import { Product } from '../../models/products/product-model.js'
import { User } from '../../models/user/user-model.js'

/**
 * Guarda una nueva venta en la base de datos, incluyendo los elementos de la venta.
 *
 * @param {object} sale - Objeto que contiene los datos de la venta.
 * @param {number} sale.buyerId - ID del comprador.
 * @param {number} sale.sellerId - ID del vendedor.
 * @param {Array} sale.items - Lista de elementos de la venta, cada uno conteniendo información del producto.
 * @param {number} sale.items[].productId - ID del producto.
 * @param {number} sale.items[].productQuantity - Cantidad del producto en la venta.
 * @returns {Promise<Model<any, TModelAttributes>>} - Indica el éxito o fallo de la operación.
 */
export const saveSale = async (sale) => {
  const { buyerId, sellerId, items, saleDate } = sale
  try {
    let salesAmount = 0

    const buyer = await User.findByPk(buyerId)
    const seller = await User.findByPk(sellerId)

    if (!buyer || !seller) {
      console.error('Buyer or seller not found')
      return null
    }
    if (buyer.roleId !== 3) {
      console.error('Invalid role for buyer')
      return null
    }

    if (seller.roleId !== 1 && seller.roleId !== 2) {
      console.error('Invalid role for seller')
      return null
    }

    if (buyerId === sellerId) {
      console.error('Buyer and seller cannot be the same user')
      return null
    }

    for (const item of items) {
      const { productId, productQuantity, unitPrice: itemUnitPrice } = item

      const product = await Product.findByPk(productId)
      if (!product) {
        console.error(`Product with ID ${productId} not found`)
        return null
      }

      if (product.quantity < productQuantity) {
        console.error(`Not enough stock for product with ID ${productId}`)
        return null
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
      if (!product) {
        console.error(`Product with ID ${productId} not found`)
        return null
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

    return newSale
  } catch (e) {
    console.error(e)
  }
}

/**
 * Recupera todas las ventas de la base de datos, incluyendo los elementos asociados a cada venta.
 *
 * @returns {Promise<object>} - Objeto que contiene todas las ventas, cada una con su lista de elementos.
 */
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
