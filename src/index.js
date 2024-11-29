import express from 'express'
import { PORT, corsOptions } from './config/config.js'
import morgan from 'morgan'
import cors from 'cors'
import { usersRouter } from './routes/users/users-router.js'
import { authRouter } from './routes/auth/auth-router.js'
import { productsRouter } from './routes/products/products-router.js'
import { salesRouter } from './routes/sales/sales-router.js'
import { reportsRouter } from './routes/reports/reports-router.js'
import { contactsRouter } from './routes/contacts/contacts-router.js'

export const app = express()

// Middleware de registro de solicitudes
app.use(morgan('dev'))

// Middleware para habilitar CORS
app.use(cors(corsOptions))

/**
 * Rutas para la autenticación.
 * Prefijo de ruta: `/api/auth`
 */
app.use('/api/auth', authRouter)

/**
 * Rutas para la gestión de usuarios.
 * Prefijo de ruta: `/api/users`
 */
app.use('/api/users', usersRouter)

/**
 * Rutas para la gestión de contactos.
 * Prefijo de ruta: `/api/contacts`
 */
app.use('/api/contacts', contactsRouter)

/**
 * Rutas para la gestión de productos.
 * Prefijo de ruta: `/api/products`
 */
app.use('/api/products', productsRouter)

/**
 * Rutas para la gestión de ventas.
 * Prefijo de ruta: `/api/sales`
 */
app.use('/api/sales', salesRouter)

/**
 * Rutas para la generación de reportes.
 * Prefijo de ruta: `/api/reports`
 */
app.use('/api/reports', reportsRouter)

/**
 * Inicia el servidor y escucha en el puerto especificado.
 */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
