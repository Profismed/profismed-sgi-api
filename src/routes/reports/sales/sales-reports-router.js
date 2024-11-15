import { getMonthlySales, getSalesProducts, getSalesProductsSummary } from '../../../controllers/reports/sales/sales-reports-controller.js'
import express from 'express'

export const salesReportsRouter = express.Router()

/**
 * Ruta para obtener las ventas mensuales.
 *
 * Define una ruta HTTP GET para `/monthly-sales` que invoca la función `getMonthlySales`
 * desde el controlador `sales-reports-controller.js`. Esta función recupera y envía en formato JSON
 * los datos de las ventas mensuales.
 *
 * @name GET /monthly-sales
 * @function
 * @inner
 */
salesReportsRouter.get('/monthly-sales', getMonthlySales)

/**
 * Ruta para obtener los productos de las ventas.
 *
 * Define una ruta HTTP GET para `/sales-products` que invoca la función `getSalesProducts`
 * desde el controlador `sales-reports-controller.js`. Esta función recupera y envía en formato JSON
 * los productos de cada venta.
 *
 * @name GET /sales-products
 * @function
 * @inner
 */
salesReportsRouter.get('/sales-products', getSalesProducts)

/**
 * Ruta para obtener el resumen de productos vendidos.
 *
 * Define una ruta HTTP GET para `/sales-products-summary` que invoca la función `getSalesProductsSummary`
 * desde el controlador `sales-reports-controller.js`. Esta función recupera y envía en formato JSON
 * el resumen de los productos vendidos en cada venta.
 *
 * @name GET /sales-products-summary
 * @function
 * @inner
 */
salesReportsRouter.get('/sales-products-summary', getSalesProductsSummary)
