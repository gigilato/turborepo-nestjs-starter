import { registerAs } from '@nestjs/config'

const host = process.env.MONGO_HOST
const port = Number.parseInt(process.env.MONGO_PORT, 10)
const password = process.env.MONGO_PASSWORD
const user = process.env.MONGO_USER
const database = process.env.MONGO_DATABASE

const uri = `mongodb://${user}:${password}@${host}:${port}/${database}`

export const mongoConfig = registerAs('mongo', () => ({
  host,
  port,
  password,
  user,
  database,
  uri,
}))
