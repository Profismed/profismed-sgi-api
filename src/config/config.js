process.loadEnvFile('.local.env')

export const PORT = process.env.PORT ?? 8080
export const DB_PORT = process.env.DB_PORT ?? 3306
export const DB_HOST = process.env.DB_HOST ?? 'localhost'
export const DB_USER = process.env.DB_USER ?? 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD ?? ''
export const DB_NAME = process.env.DB_NAME ?? 'test'
export const JWT_SECRET = process.env.JWT_SECRET
export const SALT_ROUNDS = Number(process.env.SALT_ROUNDS) ?? 5
