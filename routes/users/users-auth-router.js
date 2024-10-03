import express from 'express'
import { loginUser, registerUser, retrieveUserName, logoutUser } from '../../controllers/users/users-controller.js'
import cookieParser from 'cookie-parser'

export const router = express.Router()

router.use(express.json())

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)

router.use(cookieParser())

router.get('/userName', retrieveUserName)
