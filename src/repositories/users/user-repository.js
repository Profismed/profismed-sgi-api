import { User } from '../../models/user-model.js'

import bcrypt from 'bcrypt'
import { SALT_ROUNDS } from '../../config/config.js'

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

export const verifyExistingUser = async (username) => {
  try {
    const user = await User.findOne({ where: { username } })
    return !!user
  } catch (e) {
    console.error(e)
  }
}

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
