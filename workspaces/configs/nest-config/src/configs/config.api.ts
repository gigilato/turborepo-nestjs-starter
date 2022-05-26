import { registerAs } from '@nestjs/config'

export const apiConfig = registerAs('api', () => ({
  host: process.env.API_HOST,
  port: process.env.API_PORT,
  url: process.env.API_URL,
}))
