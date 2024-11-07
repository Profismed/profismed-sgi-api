import express from 'express'
import { createProduct, listProducts, updateProduct, deleteProduct } from '../../controllers/products/products-controller.js'
import {isSessionActive} from '../../middlewares/auth/auth-middlewares.js'
import cookieParser from 'cookie-parser'

export const productsRouter = express.Router()

productsRouter.use(express.json())
productsRouter.use(cookieParser())
productsRouter.use(isSessionActive)


productsRouter.post('/create', createProduct)

productsRouter.get('/all', listProducts)

productsRouter.put('/update/:id', updateProduct)

productsRouter.delete('/delete/:id', deleteProduct)
