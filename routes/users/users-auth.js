import express from 'express'
import { loginUser, registerUser } from '../../controllers/users/user-controller.js'

export const router = express.Router()

router.use(express.json())

router.post('/register', registerUser)
router.post('/login', loginUser)
