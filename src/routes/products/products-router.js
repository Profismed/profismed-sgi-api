import express from 'express'
import { createProduct, listProducts, updateProduct, deleteProduct, getProduct } from '../../controllers/products/products-controller.js'
import { isSessionActive } from '../../middlewares/auth/auth-middlewares.js'
import cookieParser from 'cookie-parser'

export const productsRouter = express.Router()

/**
 * Middleware para analizar el cuerpo de las solicitudes como JSON.
 */
productsRouter.use(express.json())

/**
 * Middleware para habilitar el análisis de cookies.
 */
productsRouter.use(cookieParser())

/**
 * Middleware para verificar que la sesión esté activa antes de permitir
 * el acceso a las rutas de productos protegidas.
 */
productsRouter.use(isSessionActive)

/**
 * Ruta para crear un nuevo producto.
 * Llama a la función `createProduct` del controlador.
 *
 * @name POST /create
 * @path {POST} /create
 */
productsRouter.post('/create', createProduct)

/**
 * Ruta para listar todos los productos disponibles.
 * Llama a la función `listProducts` del controlador.
 *
 * @name GET /all
 * @path {GET} /all
 */
productsRouter.get('/all', listProducts)

/**
 * Ruta para actualizar un producto específico.
 * Llama a la función `updateProduct` del controlador.
 *
 * @name PUT /update/:id
 * @path {PUT} /update/:id
 */
productsRouter.put('/update/:id', updateProduct)

/**
 * Ruta para eliminar un producto específico.
 * Llama a la función `deleteProduct` del controlador.
 *
 * @name DELETE /delete/:id
 * @path {DELETE} /delete/:id
 */
productsRouter.delete('/delete/:id', deleteProduct)

/**
 * Ruta para obtener un producto específico.
 * Llama a la función `getProduct` del controlador.
 *
 * @name GET /:id
 * @path {GET} /:id
 */
productsRouter.get('/:id', getProduct)
