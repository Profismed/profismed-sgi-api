import { buyersSellersReportsRouter } from './buyers-sellers/buyers-sellers-reports-router.js'
import { productsReportsRouter } from './products/products-reports-router.js'
import { salesReportsRouter } from './sales/sales-reports-router.js'
import { zonesReportsRouter } from './zones/zones-reports-router.js'
import express from 'express'

export const reportsRouter = express.Router()

/**
 * Ruta principal para los reportes de compradores y vendedores.
 *
 * Define una subruta en `/buyers-sellers` que utiliza el router `buyersSellersReportsRouter`.
 * Esta subruta permite acceder a los endpoints relacionados con los reportes de compradores y vendedores.
 *
 * @name /buyers-sellers
 * @function
 * @inner
 */
reportsRouter.use('/buyers-sellers', buyersSellersReportsRouter)

/**
 * Ruta principal para los reportes de productos.
 *
 * Define una subruta en `/products` que utiliza el router `productsReportsRouter`.
 * Esta subruta permite acceder a los endpoints relacionados con los reportes de productos.
 *
 * @name /products
 * @function
 * @inner
 */
reportsRouter.use('/products', productsReportsRouter)

/**
 * Ruta principal para los reportes de ventas.
 *
 * Define una subruta en `/sales` que utiliza el router `salesReportsRouter`.
 * Esta subruta permite acceder a los endpoints relacionados con los reportes de ventas.
 *
 * @name /sales
 * @function
 * @inner
 */
reportsRouter.use('/sales', salesReportsRouter)

/**
 * Ruta principal para los reportes de zonas.
 *
 * Define una subruta en `/zones` que utiliza el router `zonesReportsRouter`.
 * Esta subruta permite acceder a los endpoints relacionados con los reportes de zonas.
 *
 * @name /zones
 * @function
 * @inner
 */
reportsRouter.use('/zones', zonesReportsRouter)