import { Logger } from '@nestjs/common'
import Joi from 'joi'

const schema = Joi.object({
  // api
  API_HOST: Joi.string().required(),
  API_PORT: Joi.string().required(),
  API_URL: Joi.string().required(),
  // mongo
  MONGO_HOST: Joi.string().required(),
  MONGO_PORT: Joi.string().required(),
  MONGO_USER: Joi.string().required(),
  MONGO_PASSWORD: Joi.string().required(),
  MONGO_DATABASE: Joi.string().required(),
})

export const validateEnvFile = () => {
  const validation = schema.validate(process.env, { abortEarly: false, allowUnknown: true })
  if (!validation.error) return
  for (const { message } of validation.error.details) Logger.error(`[ENV Error]: ${message}`)
  throw new Error('Invalid ENV file')
}
