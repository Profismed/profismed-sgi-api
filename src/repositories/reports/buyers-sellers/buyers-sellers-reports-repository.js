import { TopBuyers } from '../../../models/reports/buyers-sellers/top-buyers.js'
import { TopSellers } from '../../../models/reports/buyers-sellers/top-sellers.js'

export const retrieveTopBuyers = async () => {
  try {
    return await TopBuyers.findAll({
      attributes: [
        'buyer_id',
        'enterprise_name',
        'contact_first_name',
        'contact_last_name',
        'contact_email',
        'contact_phone',
        'enterprise_document',
        'contact_job',
        'contact_origin',
        'location_id',
        'total_purchased',
        'products_bought'
      ]
    })
  } catch (error) {
    console.error('Error retrieving top buyers:', error)
    throw error
  }
}

export const retrieveTopSellers = async () => {
  try {
    return await TopSellers.findAll()
  } catch (error) {
    console.error('Error retrieving top sellers:', error)
    throw error
  }
}
