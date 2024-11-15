import { retrieveLeastSalesZone, retrieveTopSalesZone } from '../../../repositories/reports/zones/zones-reports-repository.js'

export const getLeastSalesZone = async (req, res) => {
  try {
    const leastSalesZone = await retrieveLeastSalesZone()
    if (!leastSalesZone) {
      return res.status(404).json({ message: 'Least sales zone not found' })
    }
    return res.status(200).json(leastSalesZone)
  } catch (error) {
    return res.status(500).send('Error retrieving least sales zone')
  }
}

export const getTopSalesZone = async (req, res) => {
  try {
    const topSalesZone = await retrieveTopSalesZone()
    if (!topSalesZone) {
      return res.status(404).json({ message: 'Top sales zone not found' })
    }
    return res.status(200).json(topSalesZone)
  } catch (error) {
    res.status(500).send('Error retrieving top sales zone')
  }
}
