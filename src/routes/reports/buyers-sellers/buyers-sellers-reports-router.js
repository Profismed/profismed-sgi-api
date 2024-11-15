import { getTopSellers, getTopBuyers } from '../../../controllers/reports/buyers-sellers/buyers-sellers-reports-controller.js'
import express from 'express'

export const buyersSellersReportsRouter = express.Router()

buyersSellersReportsRouter.get('/top-buyers', getTopBuyers)

buyersSellersReportsRouter.get('/top-sellers', getTopSellers)
