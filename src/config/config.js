process.loadEnvFile('.local.env')

/**
 * Configuración de la aplicación obtenida de variables de entorno.
 * Si las variables de entorno no están definidas, se utilizan valores predeterminados.
 *
 * @constant {number} PORT - Puerto en el que se ejecuta la aplicación, por defecto `8080`.
 * @constant {number} DB_PORT - Puerto de conexión a la base de datos, por defecto `3306`.
 * @constant {string} DB_HOST - Dirección del host de la base de datos, por defecto `localhost`.
 * @constant {string} DB_USER - Usuario de la base de datos, por defecto `root`.
 * @constant {string} DB_PASSWORD - Contraseña del usuario de la base de datos, por defecto una cadena vacía.
 * @constant {string} DB_NAME - Nombre de la base de datos, por defecto `test`.
 * @constant {string} JWT_SECRET - Secreto utilizado para firmar tokens JWT. Este valor debe estar definido en `.local.env`.
 * @constant {number} SALT_ROUNDS - Número de rondas para encriptación de contraseñas, convertido a número. Por defecto `5`.
 */
export const PORT = process.env.PORT ?? 8080
export const DB_PORT = process.env.DB_PORT ?? 3306
export const DB_HOST = process.env.DB_HOST ?? 'localhost'
export const DB_USER = process.env.DB_USER ?? 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD ?? ''
export const DB_NAME = process.env.DB_NAME ?? 'test'
export const JWT_SECRET = process.env.JWT_SECRET
export const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) ?? 5
