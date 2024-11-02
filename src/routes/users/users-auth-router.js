import express from 'express'
import { registerUser } from '../../controllers/users/users-controller.js'
import { loginUser, logoutUser, retrieveUserSessionData} from '../../controllers/auth/auth-controller.js'
import {isSessionActive} from "../../middlewares/auth/auth-middlewares.js";


import cookieParser from 'cookie-parser'

export const router = express.Router()

router.use(express.json())

router.post('/register', registerUser)

router.post('/logout', logoutUser)

router.use(cookieParser())
router.post('/login', loginUser)

router.use(isSessionActive)

router.get('/userData', retrieveUserSessionData)
