import { TopSellingProduct } from '../../../models/reports/products/top-selling-product.js';
import { Top10Products } from '../../../models/reports/products/top-10-selling-products.js';
import { LeastSellingProduct } from '../../../models/reports/products/least-selling-product.js';

export const retrieveTopSellingProduct = async () => {
  try {
    return await TopSellingProduct.findAll({
      attributes: [
        'product_id',
        'product_name',
        'total_quantity_sold'
      ]
    });
  } catch (error) {
    console.error('Error retrieving top selling product:', error);
    throw error;
  }
}

export const retrieveTop10Products = async () => {
  try {
    return await Top10Products.findAll({
      attributes: [
        'product_id',
        'product_name',
        'total_quantity_sold'
      ]
    });
  } catch (error) {
    console.error('Error retrieving top 10 products:', error);
    throw error;
  }
}

export const retrieveLeastSellingProduct = async () => {
  try {
    return await LeastSellingProduct.findAll({
      attributes: [
        'product_id',
        'product_name',
        'total_quantity_sold'
      ]
    });
  } catch (error) {
    console.error('Error retrieving least selling product:', error);
    throw error;
  }
}
