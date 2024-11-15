import { TopSalesZone } from '../../../models/reports/zones/top-sales-zone.js'
import { LeastSalesZone } from '../../../models/reports/zones/least-sales-zone.js'

export const retrieveTopSalesZone = async () => {
  try {
    return await TopSalesZone.findAll()
  } catch (error) {
    console.error('Error retrieving top sales zone:', error)
    throw error
  }
}

export const retrieveLeastSalesZone = async () => {
  try {
    return await LeastSalesZone.findAll()
  } catch (error) {
    console.error('Error retrieving least sales zone:', error)
    throw error
  }
}
