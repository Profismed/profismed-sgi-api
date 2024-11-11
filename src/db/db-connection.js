import { Sequelize } from 'sequelize';
import { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD } from '../config/config.js';

/**
 * Configuración de la conexión a la base de datos usando Sequelize.
 * Inicializa una instancia de Sequelize con los parámetros de configuración para la base de datos.
 */
export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
  attributeBehavior: "escape"
})

/**
 * Intenta establecer la conexión con la base de datos.
 * Autentica la conexión y muestra un mensaje de éxito o error en la consola.
 *
 * @async
 * @function tryConnection
 * @returns {Promise<void>} - Muestra en la consola si la conexión fue exitosa o si hubo un error.
 */
const tryConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Solo ejecuta la conexión si el entorno no es de prueba
if (process.env.NODE_ENV !== 'test') {
  tryConnection().then(() => {
    console.log('Connection to database established');
  });
}
