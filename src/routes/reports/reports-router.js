import { buyersSellersReportsRouter } from './buyers-sellers/buyers-sellers-reports-router.js'
import { productsReportsRouter } from './products/products-reports-router.js'
import { salesReportsRouter } from './sales/sales-reports-router.js'
import { zonesReportsRouter } from './zones/zones-reports-router.js'
import express from 'express'

export const reportsRouter = express.Router()

reportsRouter.use('/buyers-sellers', buyersSellersReportsRouter)

reportsRouter.use('/products', productsReportsRouter)

reportsRouter.use('/sales', salesReportsRouter)

reportsRouter.use('/zones', zonesReportsRouter)
