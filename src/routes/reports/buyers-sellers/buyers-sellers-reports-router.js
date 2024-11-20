import { getTopSellers, getTopBuyers } from '../../../controllers/reports/buyers-sellers/buyers-sellers-reports-controller.js'
import express from 'express'

export const buyersSellersReportsRouter = express.Router()

/**
 * Ruta para obtener el listado de los principales compradores.
 *
 * Define una ruta HTTP GET para `/top-buyers` que invoca la función `getTopBuyers`
 * desde el controlador `buyers-sellers-reports-controller.js`. Esta función recupera
 * y envía en formato JSON los datos de los principales compradores.
 *
 * @name GET /top-buyers
 * @function
 * @inner
 */
buyersSellersReportsRouter.get('/top-buyers', getTopBuyers)

/**
 * Ruta para obtener el listado de los principales vendedores.
 *
 * Define una ruta HTTP GET para `/top-sellers` que invoca la función `getTopSellers`
 * desde el controlador `buyers-sellers-reports-controller.js`. Esta función recupera
 * y envía en formato JSON los datos de los principales vendedores.
 *
 * @name GET /top-sellers
 * @function
 * @inner
 */
buyersSellersReportsRouter.get('/top-sellers', getTopSellers)
