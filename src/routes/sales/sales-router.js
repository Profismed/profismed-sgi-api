import { createSale, listSales } from '../../controllers/sales/sales-controller.js'
import express from 'express'
import { isSessionActive } from '../../middlewares/auth/auth-middlewares.js'

/**
 * Ruta para manejar las operaciones relacionadas con las ventas.
 * Se define un enrutador que utiliza los controladores `createSale` y `listSales`
 * para procesar las solicitudes HTTP correspondientes a la creación de una venta
 * y la obtención de todas las ventas, respectivamente.
 *
 * El middleware `isSessionActive` asegura que solo los usuarios con una sesión activa
 * puedan acceder a las rutas de ventas.
 */
export const salesRouter = express.Router()

// Middleware para verificar si la sesión está activa antes de procesar las solicitudes
salesRouter.use(isSessionActive)

// Middleware para procesar solicitudes con cuerpo JSON
salesRouter.use(express.json())

// Ruta POST para crear una nueva venta
salesRouter.post('/create', createSale)

// Ruta GET para obtener la lista de todas las ventas
salesRouter.get('/list', listSales)
