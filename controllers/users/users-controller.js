import { verifyUser, saveUser, verifyExistingUser } from '../../repositories/users/user-repository.js'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../../config/config.js'

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

export const loginUser = async (req, res) => {
  const { username, password } = req.body

  const user = { username, password }

  try {
    const isUser = await verifyUser(user)
    if (isUser) {
      const token = jwt.sign(username, JWT_SECRET)
      res.cookie('token', token)
      res.status(200).send('Logged in')
    } else {
      res.status(401).send('Invalid credentials')
    }
  } catch (e) {
    console.error(e)
    res.status(500).send('Something went wrong')
  }
}

export const retrieveUserName = async (req, res) => {
  try {
    const token = req.cookies.token
    const username = jwt.verify(token, JWT_SECRET)
    res.status(200).send(username)
  } catch (e) {
    console.error(e)
    res.status(500).send('Something went wrong')
  }
}

export const logoutUser = async (req, res) => {
  try {
    res.clearCookie('token')
    res.status(200).send('Logged out')
  } catch (e) {
    console.error(e)
    res.status(500).send('Something went wrong')
  }
}
