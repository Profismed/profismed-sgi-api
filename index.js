import express from 'express'
import { PORT } from './config/config.js'
import morgan from 'morgan'
import { router as usersAuthRoutes } from './routes/users/users-auth.js'

const app = express()

app.use(morgan('dev'))
app.use('/api/auth', usersAuthRoutes)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
