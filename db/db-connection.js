import mysql from 'mysql2/promise.js'
import { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD } from '../config/config.js'

export const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  database: DB_NAME,
  password: DB_PASSWORD
})
