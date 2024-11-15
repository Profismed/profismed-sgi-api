import { getTopSalesZone, getLeastSalesZone } from '../../../controllers/reports/zones/zones-reports-controller.js'
import express from 'express'

export const zonesReportsRouter = express.Router()

zonesReportsRouter.get('/top-sales-zone', getTopSalesZone)

zonesReportsRouter.get('/least-sales-zone', getLeastSalesZone)
