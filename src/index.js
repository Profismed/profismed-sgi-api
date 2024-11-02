import express from 'express'
import { PORT } from './config/config.js'
import morgan from 'morgan'
import { router as usersAuthRoutes } from './routes/users/users-auth-router.js'
import cors from 'cors'
import { productsRouter } from './routes/products/products-router.js'

const app = express()

// Middleware de registro de solicitudes
// Utiliza morgan en el formato 'dev' para mostrar detalles sobre cada solicitud en la consola
app.use(morgan('dev'))

// Middleware para habilitar CORS (Cross-Origin Resource Sharing)
// Permite que el servidor acepte solicitudes desde diferentes dominios, necesario para aplicaciones web distribuidas
app.use(cors())

/**
 * Rutas para la autenticación y gestión de usuarios.
 * Prefijo de ruta: `/api/auth`
 * Este grupo de rutas incluye el manejo de registro, inicio de sesión, recuperación de contraseñas, etc.
 */
app.use('/api/auth', usersAuthRoutes)

/**
 * Rutas para la gestión de productos.
 * Prefijo de ruta: `/api/products`
 * Este grupo de rutas permite realizar operaciones CRUD en productos, como listar, crear, actualizar y eliminar productos.
 */
app.use('/api/products', productsRouter)

/**
 * Inicia el servidor y escucha en el puerto especificado.
 * Cuando el servidor se inicia exitosamente, se muestra un mensaje en la consola indicando el puerto de escucha.
 * Utiliza el puerto definido en el archivo de configuración (config.js).
 */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
