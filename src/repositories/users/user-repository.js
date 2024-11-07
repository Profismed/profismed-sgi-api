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
 * @returns {Promise<void>} - Devuelve una promesa que indica el éxito o fallo de la operación.
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
 * Verifica las credenciales de un usuario comparando la contraseña ingresada con la almacenada.
 *
 * @param {object} user - Objeto que contiene `username` y `password` del usuario.
 * @returns {Promise<boolean>} - Devuelve `true` si las credenciales son válidas, `false` en caso contrario.
 */
export const verifyUserCredentials = async (user) => {
  const { username, password } = user
  try {
    const user = await User.findOne({ where: { username } })
    if (!user) {
      return false
    }

    return await bcrypt.compare(password, user.password)
  } catch (e) {
    console.error(e)
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
    const user = await User.findOne({ where: { username } })
    return !!user
  } catch (e) {
    console.error(e)
  }
}

/**
 * Recupera los datos de un usuario sin incluir la contraseña.
 *
 * @param {string} username - Nombre de usuario cuyos datos se desean recuperar.
 * @returns {Promise<object|null>} - Devuelve un objeto con los datos del usuario sin la contraseña, o `null` si el usuario no existe.
 */
export const retrieveUserData = async (username) => {
  try {
    const user = await User.findOne({ where: { username } })
    if (!user) {
      return null
    }
    const { password, ...userWithoutPassword } = user.toJSON()
    return userWithoutPassword
  } catch (e) {
    console.error(e)
  }
}

export const updateUserDb = async (username, user) => {
  try {
    await User.update(user, { where: { username } })
  } catch (e) {
    console.error(e)
  }
}

export const deleteUserByUsernameDb = async (username) => {
  try {
    await User.update({ isAvailable: 0 }, { where: { username } })
  } catch (e) {
    console.error(e)
  }
}

export const verifyExistingUserById = async (userId) => {
  try {
    const user = await User.findByPk(userId)
    return !!user
  } catch (e) {
    console.error(e)
  }
}

export const deleteUserByIdDb = async (userId) => {
  try {
    await User.update({ isAvailable: 0 }, { where: { userId } })
  } catch (e) {
    console.error(e)
  }
}

export const getAllUsersDb = async () => {
  try {
    return await User.findAll({
      where: {
        roleId: {
          [Op.ne]: 1
        }
      }
    })
  } catch (e) {
    console.error(e)
  }
}
