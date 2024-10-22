import { saveUser, verifyExistingUser } from '../../repositories/users/user-repository.js'

export const registerUser = async (req, res) => {
  const {
    username,
    userEmail,
    userPhone,
    roleId,
    documentId,
    documentNumber,
    userJob,
    userContactOrigin,
    locationId,
    password
  } = req.body

  const user = {
    username,
    userEmail,
    userPhone,
    roleId,
    documentId,
    documentNumber,
    userJob,
    userContactOrigin,
    locationId,
    password
  }
  if (await verifyExistingUser(username)) {
    return res.status(400).send('User already exists')
  } else {
    try {
      await saveUser(user)
      res.status(201).send('User created')
    } catch (e) {
      console.error(e)
      res.status(500).send('Something went wrong')
    }
  }
}
