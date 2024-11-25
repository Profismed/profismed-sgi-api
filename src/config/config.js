import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: '.local.env' });
  console.log('.local.env loaded');
}

/**
 * Configuración de la aplicación obtenida de variables de entorno.
 * Si las variables de entorno no están definidas, se utilizan valores predeterminados.
 *
 * @constant {number} PORT - Puerto en el que se ejecuta la aplicación. Valor predeterminado: `8080`.
 * @constant {number} DB_PORT - Puerto de conexión a la base de datos. Valor predeterminado: `3306`.
 * @constant {string} DB_HOST - Dirección del host de la base de datos. Valor predeterminado: `localhost`.
 * @constant {string} DB_USER - Usuario de la base de datos. Valor predeterminado: `root`.
 * @constant {string} DB_PASSWORD - Contraseña del usuario de la base de datos. Valor predeterminado: una cadena vacía.
 * @constant {string} DB_NAME - Nombre de la base de datos. Valor predeterminado: `test`.
 * @constant {string} JWT_SECRET - Secreto utilizado para firmar tokens JWT. Este valor debe estar definido en `.local.env`.
 * @constant {number} SALT_ROUNDS - Número de rondas para encriptación de contraseñas, convertido a número. Valor predeterminado: `5`.
 */
export const PORT = process.env.PORT
export const DB_PORT = process.env.DB_PORT
export const DB_HOST = process.env.DB_HOST
export const DB_USER = process.env.DB_USER
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_NAME = process.env.DB_NAME
export const JWT_SECRET = process.env.JWT_SECRET
export const SALT_ROUNDS = Number(process.env.SALT_ROUNDS)

export const corsOptions = {
  origin: ['http://localhost:3001', 'http://localhost:3000', 'https://bright-empanada-a7b001.netlify.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  preflightContinue: false
}
