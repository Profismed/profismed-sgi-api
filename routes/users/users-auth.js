import express from 'express'
import { UserRepository } from '../../repositories/users/user-repository.js'

export const app = express.Router();


app.post('/login', (req, res) => {
  res.json({ message: 'Login route' })
})

app.post('/register', async (req, res) => {
  const {
    username,
    password
  } = req.body
  console.log(req.body)

  try {
    const id = await UserRepository.create({
      username,
      password
    })
    res.json({ id })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

app.post('/logout', (req, res) => {
  res.send('Register route')
})

app.post('/protected', (req, res) => {
  res.send('Register route')
})
