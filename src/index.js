import express from 'express'
import { PORT, corsOptions } from './config/config.js'
import morgan from 'morgan'
import { router as usersAuthRoutes } from './routes/users/users-auth-router.js'
import cors from 'cors'

const app = express()

// Middleware para registrar las solicitudes en la consola en formato de desarrollo
app.use(morgan('dev'))

// Middleware para habilitar CORS (Cross-Origin Resource Sharing)
app.use(cors(corsOptions))

/**
 * Rutas de autenticación y gestión de usuarios.
 * Prefijo para las rutas de autenticación: `/api/auth`
 */
app.use('/api/auth', usersAuthRoutes)

/**
 * Inicia el servidor en el puerto especificado en la configuración.
 * Muestra un mensaje en la consola indicando que el servidor está en funcionamiento.
 */
app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`)
})
