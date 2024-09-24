import express from 'express'
import { PORT } from './config.js'
import morgan from 'morgan'
import {app as usersAuthRouter} from './routes/users/users-auth.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(usersAuthRouter)



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
