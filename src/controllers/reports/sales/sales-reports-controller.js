import { retrieveMonthlySales, retrieveSalesProducts, retrieveSalesProductsSummary } from '../../../repositories/reports/sales/sales-reports-repository.js'

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
