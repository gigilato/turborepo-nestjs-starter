import dotenv from 'dotenv'
import { validateEnvFile } from './config.utils'

dotenv.config({ path: '../../.env' })
validateEnvFile()

export * from './config.module'
export * from './config.service'
export * from './config.types'
