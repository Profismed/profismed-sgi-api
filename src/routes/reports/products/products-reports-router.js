import { getLeastSellingProduct, getTop10Products, getTopSellingProduct } from '../../../controllers/reports/products/products-reports-controller.js'
import express from 'express'

export const productsReportsRouter = express.Router()

productsReportsRouter.get('/least-selling-product', getLeastSellingProduct)

productsReportsRouter.get('/top-10-products', getTop10Products)

productsReportsRouter.get('/top-selling-product', getTopSellingProduct)
