import { saveUser, verifyExistingUser } from '../../repositories/users/user-repository.js'

export const registerUser = async (req, res) => {
  const { username, password } = req.body

  const user = { username, password }

  try {
    if (await verifyExistingUser(username)) {
      return res.status(400).send('User already exists')
    } else {
      await saveUser(user)
      res.status(201).send('User created')
    }
  } catch (e) {
    console.error(e)
    res.status(500).send('Something went wrong')
  }
}
