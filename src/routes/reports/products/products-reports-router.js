import { getLeastSellingProduct, getTop10Products, getTopSellingProduct } from '../../../controllers/reports/products/products-reports-controller.js'
import express from 'express'

export const productsReportsRouter = express.Router()

/**
 * Ruta para obtener el producto con menor cantidad de ventas.
 *
 * Define una ruta HTTP GET para `/least-selling-product` que invoca la función `getLeastSellingProduct`
 * desde el controlador `products-reports-controller.js`. Esta función recupera y envía en formato JSON
 * los datos del producto con menor cantidad de ventas.
 *
 * @name GET /least-selling-product
 * @function
 * @inner
 */
productsReportsRouter.get('/least-selling-product', getLeastSellingProduct)

/**
 * Ruta para obtener los 10 productos más vendidos.
 *
 * Define una ruta HTTP GET para `/top-10-products` que invoca la función `getTop10Products`
 * desde el controlador `products-reports-controller.js`. Esta función recupera y envía en formato JSON
 * los datos de los 10 productos más vendidos.
 *
 * @name GET /top-10-products
 * @function
 * @inner
 */
productsReportsRouter.get('/top-10-products', getTop10Products)

/**
 * Ruta para obtener el producto con mayor cantidad de ventas.
 *
 * Define una ruta HTTP GET para `/top-selling-product` que invoca la función `getTopSellingProduct`
 * desde el controlador `products-reports-controller.js`. Esta función recupera y envía en formato JSON
 * los datos del producto con mayor cantidad de ventas.
 *
 * @name GET /top-selling-product
 * @function
 * @inner
 */
productsReportsRouter.get('/top-selling-product', getTopSellingProduct)
