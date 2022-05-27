import { registerAs } from '@nestjs/config'

export const apiConfig = registerAs('api', () => ({
  host: process.env.API_HOST,
  port: Number.parseInt(process.env.API_PORT, 10),
  url: process.env.API_URL,
}))
