import { Sequelize } from 'sequelize'

import { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD } from '../config/config.js'

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
 host: DB_HOST,
 dialect: 'mysql'
})

const tryConnection = async () => {
 try {
   await sequelize.authenticate()
   console.log('Connection has been established successfully.')
 } catch (error) {
   console.error('Unable to connect to the database:', error)
 }
}

tryConnection().then(() => {
 console.log('Connection to database established')
})
