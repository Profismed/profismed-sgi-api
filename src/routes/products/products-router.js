import express from 'express'
import { createProduct, listProducts, updateProduct, deleteProduct } from '../../controllers/products/products-controller.js'

export const productsRouter = express.Router()

productsRouter.use(express.json())

productsRouter.post('/create', createProduct)

productsRouter.get('/', listProducts)

productsRouter.put('/update/:id', updateProduct)

productsRouter.delete('/delete/:id', deleteProduct)
