import { retrieveLeastSellingProduct, retrieveTop10Products, retrieveTopSellingProduct } from '../../../repositories/reports/products/products-reports-repository.js'

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
