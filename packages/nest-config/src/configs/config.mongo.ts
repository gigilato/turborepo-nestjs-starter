import { registerAs } from '@nestjs/config'

export const mongoConfig = registerAs('mongo', () => ({
  host: process.env.MONGO_HOST,
  port: Number.parseInt(process.env.MONGO_PORT, 10),
  password: process.env.MONGO_PASSWORD,
  user: process.env.MONGO_USER,
  database: process.env.MONGO_DATABASE,
}))
