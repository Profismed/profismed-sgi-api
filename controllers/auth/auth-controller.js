import { verifyUserCredentials, retrieveUserData } from '../../repositories/users/user-repository.js'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../../config/config.js'

export const loginUser = async (req, res) => {
  const { username, password } = req.body

  const user = { username, password }

  try {
    const isUser = await verifyUserCredentials(user)
    if (isUser) {
      const userData = await retrieveUserData(username)
      console.log(userData)
      res.cookie('token', jwt.sign(userData, JWT_SECRET))
      res.status(200).send('Logged in')
    } else {
      res.status(401).send('Invalid credentials')
    }
  } catch (e) {
    console.error(e)
    res.status(500).send('Something went wrong')
  }
}

export const retrieveUserSessionData = async (req, res) => {
  try {
    const token = req.cookies.token
    const userData = jwt.verify(token, JWT_SECRET)
    res.status(200).send(userData)
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

export const isSessionActive = async (req, res, next) => {
  try {
    const token = req.cookies.token
    if (!token) {
      return res.status(401).send('Unauthorized')
    }

    const decoded = jwt.verify(token, JWT_SECRET)
    if (decoded) {
      next()
    } else {
      res.status(401).send('Unauthorized')
    }
  } catch (e) {
    console.error(e)
    res.status(401).send('Unauthorized')
  }
}
