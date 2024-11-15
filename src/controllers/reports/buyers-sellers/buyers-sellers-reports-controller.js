import { retrieveTopSellers, retrieveTopBuyers } from '../../../repositories/reports/buyers-sellers/buyers-sellers-reports-repository.js'

export const getTopBuyers = async (req, res) => {
  try {
    const topBuyers = await retrieveTopBuyers()
    if (!topBuyers) {
      return res.status(404).json({ message: 'Top buyers not found' })
    }
    return res.status(200).json(topBuyers)
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving top buyers' })
  }
}

export const getTopSellers = async (req, res) => {
  try {
    const topSellers = await retrieveTopSellers()
    if (!topSellers) {
      return res.status(404).json({ message: 'Top sellers not found' })
    }
    return res.status(200).json(topSellers)
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving top sellers' })
  }
}
