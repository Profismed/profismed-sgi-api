import express from 'express'
import { PORT } from './config/config.js'
import morgan from 'morgan'
import { router as usersAuthRoutes } from './routes/users/users-auth-router.js'
import cors from 'cors'

const app = express()

app.use(morgan('dev'))
app.use(cors())

app.use('/api/auth', usersAuthRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
