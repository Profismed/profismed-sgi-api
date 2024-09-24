import express from 'express'
import { PORT } from './config.js'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', (req, res) => {
  res.json({ message: 'Login route' });
})

app.post('/register', (req, res) => {
  res.send('Register route');
})

app.post('/logout', (req, res) => {
  res.send('Register route')
})

app.post('/protected', (req, res) => {
  res.send('Register route')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
