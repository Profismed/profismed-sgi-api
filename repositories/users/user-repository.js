import { pool } from '../../db/db-connection.js'
import bcrypt from 'bcrypt'

export const saveUser = async (user) => {
  const { username, password } = user
  const hashedPassword = await bcrypt.hash(password, 10)

  try {
    await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword])
  } catch (e) {
    console.error(e)
  }
}

export const verifyUser = async (user) => {
  const { username, password } = user
  const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username])
  if (rows.length === 0) {
    return false
  }
  const hashedPassword = rows[0].password
  return await bcrypt.compare(password, hashedPassword)
}

export const verifyExistingUser = async (username) => {
  const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username])
  return rows.length > 0
}
