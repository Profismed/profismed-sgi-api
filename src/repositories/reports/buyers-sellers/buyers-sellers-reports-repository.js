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
    return await TopSellers.findAll({
      attributes: [
        'seller_id',
        'seller_name',
        'seller_first_name',
        'seller_last_name',
        'seller_email',
        'total_sales',
        'total_sales_amount',
        'total_quantity_sold',
        'products_sold'
      ]
    })
  } catch (error) {
    console.error('Error retrieving top sellers:', error)
    throw error
  }
}
