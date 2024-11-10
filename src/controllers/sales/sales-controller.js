import { saveSale } from '../../repositories/sales/sales-item-repository.js'

export const createSale = async (req, res) => {
  const { buyerId, sellerId, items } = req.body
  const sale = {
    buyerId,
    sellerId,
    items
  }
  try {
    await saveSale(sale)
    res.status(201).send('Sale created')
  } catch (e) {
    console.error(e)
    res.status(500).send('Something went wrong')
  }
}
