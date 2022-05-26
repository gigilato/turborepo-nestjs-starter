import { Logger } from '@nestjs/common'
import Joi from 'joi'

const schema = Joi.object({
  API_HOST: Joi.string().required(),
  API_PORT: Joi.number().required(),
  API_URL: Joi.string().required(),
})

export const validateEnvFile = () => {
  const validation = schema.validate(process.env, { abortEarly: false, allowUnknown: true })
  if (!validation.error) return
  for (const { message } of validation.error.details) Logger.error(`[ENV Error]: ${message}`)
  throw new Error('INVALID ENV FILE')
}
