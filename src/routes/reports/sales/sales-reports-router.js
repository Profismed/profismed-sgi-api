import { getMonthlySales, getSalesProducts, getSalesProductsSummary } from '../../../controllers/reports/sales/sales-reports-controller.js'
import express from 'express'

export const salesReportsRouter = express.Router()

salesReportsRouter.get('/monthly-sales', getMonthlySales)

salesReportsRouter.get('/sales-products', getSalesProducts)

salesReportsRouter.get('/sales-products-summary', getSalesProductsSummary)
