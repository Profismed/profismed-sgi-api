import { createSale } from '../../controllers/sales/sales-controller.js'
import express from 'express'

export const salesRouter = express.Router()

salesRouter.use(express.json())

salesRouter.post('/create', createSale)
