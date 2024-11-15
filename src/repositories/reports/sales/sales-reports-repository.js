import { MonthlySales } from '../../../models/reports/sales/monthly-sales.js'
import { SalesProductsView } from '../../../models/reports/sales/sales-products.js'
import { SalesProductsSummary } from '../../../models/reports/sales/sales-products-summary.js'

export const retrieveMonthlySales = async () => {
  try {
    return await MonthlySales.findAll({
      attributes: [
        'sale_month',
        'sale_year',
        'total_sales'
      ]
    })
  } catch (error) {
    console.error('Error retrieving monthly sales:', error)
    throw error
  }
}

export const retrieveSalesProducts = async () => {
  try {
    return await SalesProductsView.findAll({
      attributes: [
        'sales_id',
        'sale_date',
        'sales_amount',
        'seller_id',
        'buyer_id',
        'sales_item_id',
        'product_id',
        'product_name',
        'product_quantity',
        'unit_price',
        'subtotal'
      ]
    })
  } catch (error) {
    console.error('Error retrieving sales products:', error)
    throw error
  }
}

export const retrieveSalesProductsSummary = async () => {
  try {
    return await SalesProductsSummary.findAll({
      attributes: [
        'sales_id',
        'sale_date',
        'sales_amount',
        'seller_id',
        'buyer_id',
        'product_names',
        'total_quantity',
        'total_subtotal'
      ]
    })
  } catch (error) {
    console.error('Error retrieving sales products summary:', error)
    throw error
  }
}
