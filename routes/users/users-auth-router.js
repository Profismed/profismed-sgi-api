import express from 'express'
import { registerUser } from '../../controllers/users/users-controller.js'
import { loginUser, logoutUser, retrieveUserSessionData, isSessionActive } from '../../controllers/auth/auth-controller.js'

import cookieParser from 'cookie-parser'

export const router = express.Router()

router.use(express.json())

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)

router.use(cookieParser())
router.use(isSessionActive)

router.get('/userData', retrieveUserSessionData)
