import { User } from '../../models/user/user-model.js'
import bcrypt from 'bcrypt'
import { SALT_ROUNDS } from '../../config/config.js'
import { Op } from 'sequelize'

/**
 * Guarda un nuevo usuario en la base de datos.
 * Encripta la contraseña antes de guardar los datos.
 *
 * @param {object} user - Objeto que contiene los datos del usuario a guardar.
 * @param {string} user.username - Nombre de usuario.
 * @param {string} user.firstName - Nombre del usuario.
 * @param {string} user.lastName - Apellido del usuario.
 * @param {string} user.userEmail - Correo electrónico del usuario.
 * @param {string} user.userPhone - Teléfono del usuario.
 * @param {number} user.roleId - ID del rol del usuario.
 * @param {number} user.documentId - Tipo de documento del usuario.
 * @param {string} user.documentNumber - Número de documento del usuario.
 * @param {string} user.userJob - Profesión o cargo del usuario.
 * @param {string} user.userContactOrigin - Origen de contacto del usuario.
 * @param {number} user.locationId - ID de la ubicación del usuario.
 * @param {string} user.password - Contraseña del usuario.
 * @returns {Promise<void>} - Indica el éxito o fallo de la operación.
 */
export const saveUser = async (user) => {
  const { username, firstName, lastName, userEmail, userPhone, roleId, documentId, documentNumber, userJob, userContactOrigin, locationId, password } = user
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

  try {
    await User.create({
      username,
      firstName,
      lastName,
      userEmail,
      userPhone,
      roleId,
      documentId,
      documentNumber,
      userJob,
      userContactOrigin,
      locationId,
      password: hashedPassword
    })
  } catch (e) {
    console.error(e)
  }
}

/**
  * Guardar un cliente en la base de datos.
  *
  * @param {object} client - Objeto que contiene los datos del cliente a guardar.
  * returns {Promise<void>} - Indica el éxito o fallo de la operación.
  */
export const saveClient = async (client) => {
  const {username, firstName } = client
  try {
    const createdUser = await User.create({
      username,
      firstName,
      roleId: 3,
    })
    return createdUser
  } catch (e) {
    console.error(e)
  }
}

/**
 * Verifica las credenciales de un usuario comparando la contraseña ingresada con la almacenada.
 *
 * @param {object} user - Objeto que contiene `userEmail` y `password` del usuario.
 * @returns {Promise<boolean>} - Devuelve `true` si las credenciales son válidas, `false` en caso contrario.
 */
export const verifyUserCredentials = async (user) => {
  const { email, password } = user
  try {
    const user = await User.findOne({
      where: {
        userEmail: email,
        isAvailable: 1,
        roleId: {
          [Op.in]: [1, 2]
        }
      }
    })
    if (!user) {
      return false
    }
    return await bcrypt.compare(password, user.password)
  } catch (e) {
    console.error(e)
    return false
  }
}

/**
 * Verifica si un usuario ya existe en la base de datos por su nombre de usuario.
 *
 * @param {string} username - Nombre de usuario a verificar.
 * @returns {Promise<boolean>} - Devuelve `true` si el usuario existe, `false` en caso contrario.
 */
export const verifyExistingUserByUsername = async (username) => {
  try {
    const user = await User.findOne({
      where: {
        username,
        isAvailable: 1
      }
    })
    return !!user
  } catch (e) {
    console.error(e)
  }
}

/**
 * Recupera los datos de un usuario sin incluir la contraseña y el estado de disponibilidad.
 *
 * @param {string} username - Nombre de usuario cuyos datos se desean recuperar.
 * @returns {Promise<object|null>} - Devuelve un objeto con los datos del usuario sin la contraseña, o `null` si el usuario no existe.
 */
export const retrieveUserData = async (username) => {
  try {
    const user = await User.findOne({ attributes: { exclude: ['isAvailable', 'password'] }, where: { username } })
    if (!user) {
      return null
    }
    return user.dataValues
  } catch (e) {
    console.error(e)
  }
}

/**
 * Actualiza la información de un usuario en la base de datos por su ID.
 *
 * @param {number} userId - ID del usuario a actualizar.
 * @param {object} user - Objeto con los datos actualizados.
 * @returns {Promise<void>} - Indica el éxito o fallo de la operación.
 */
export const updateUserDb = async (userId, user) => {
  try {
    await User.update(user, { where: { userId } })
  } catch (e) {
    console.error(e)
  }
}

/**
 * Marca un usuario como no disponible en la base de datos por su nombre de usuario.
 *
 * @param {string} username - Nombre de usuario a eliminar.
 * @returns {Promise<void>} - Indica el éxito o fallo de la operación.
 */
export const deleteUserByUsernameDb = async (username) => {
  try {
    await User.update({ isAvailable: 0 }, { where: { username } })
  } catch (e) {
    console.error(e)
  }
}

/**
 * Verifica si un usuario ya existe en la base de datos por su ID.
 *
 * @param {number} userId - ID del usuario a verificar.
 * @returns {Promise<boolean>} - Devuelve `true` si el usuario existe, `false` en caso contrario.
 */
export const verifyExistingUserById = async (userId) => {
  try {
    const user = await User.findOne({
      where: {
        userId,
        isAvailable: 1
      }
    })
    return !!user
  } catch (e) {
    console.error(e)
  }
}

/**
 * Marca un usuario como no disponible en la base de datos por su ID.
 *
 * @param {number} userId - ID del usuario a eliminar.
 * @returns {Promise<void>} - Indica el éxito o fallo de la operación.
 */
export const deleteUserByIdDb = async (userId) => {
  try {
    await User.update({ isAvailable: 0 }, { where: { userId } })
  } catch (e) {
    console.error(e)
  }
}

/**
 * Recupera todos los usuarios que no tienen el rol con ID 1, excluyendo la contraseña y el estado de disponibilidad.
 *
 * @returns {Promise<Array>} - Lista de usuarios sin el rol 1.
 */
export const getAllUsersDb = async () => {
  try {
    return await User.findAll({
      attributes: { exclude: ['password', 'isAvailable'] },
      where: {
        roleId: {
          [Op.ne]: 1
        },
        isAvailable: 1
      }
    })
  } catch (e) {
    console.error(e)
  }
}

/**
 * Verifica si un usuario ya existe en la base de datos por su correo electrónico.
 *
 * @param {string} userEmail - Correo electrónico del usuario a verificar.
 * @returns {Promise<boolean>} - Devuelve `true` si el usuario existe, `false` en caso contrario.
 */
export const verifyExistingUserByEmail = async (userEmail) => {
  try {
    const user = await User.findOne({
      where: {
        userEmail,
        isAvailable: 1
      }
    })
    return !!user
  } catch (e) {
    console.error(e)
  }
}

/**
 * Recupera los datos de un usuario utilizando el correo electrónico, excluyendo la contraseña y el estado de disponibilidad.
 *
 * @param {string} userEmail - Correo electrónico del usuario cuyos datos se desean recuperar.
 * @returns {Promise<object|null>} - Devuelve un objeto con los datos del usuario sin la contraseña, o `null` si el usuario no existe.
 */
export const retrieveUserDataByEmail = async (userEmail) => {
  try {
    const user = await User.findOne({ attributes: { exclude: ['isAvailable', 'password'] }, where: { userEmail } })
    if (!user) {
      return null
    }
    return user.dataValues
  } catch (e) {
    console.error(e)
  }
}

/**
 * Recupera los datos de un usuario utilizando su ID, excluyendo la contraseña y el estado de disponibilidad.
 *
 * @param {number} userId - ID del usuario cuyos datos se desean recuperar.
 * @returns {Promise<object|null>} - Devuelve un objeto con los datos del usuario sin la contraseña, o `null` si el usuario no existe.
 */
export const retrieveUserById = async (userId) => {
  try {
    const user = await User.findOne({ attributes: { exclude: ['isAvailable', 'password'] }, where: { userId } })
    if (!user) {
      return null
    }
    return user.dataValues
  } catch (e) {
    console.error(e)
  }
}

/**
* Obtener todos los clientes de la base de datos.
*
* @param {number} roleId - ID del rol de cliente.
* @returns {Promise<Array>} - Lista de clientes.
*/
export const getAllClientsDb = async (roleId) => {
  try {
    return await User.findAll({
      attributes: { exclude: ['password', 'isAvailable'] },
      where: {
        roleId: 3,
        isAvailable: 1
      }
    })
  } catch (e) {
    console.error(e)
  }
}
