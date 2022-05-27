import { ConfigType } from '@nestjs/config'
import * as configs from './configs'

type Config = keyof typeof configs

export class ConfigModuleOptions {
  isGlobal?: boolean
  load?: Config[]
}

export type ApiConfig = ConfigType<typeof configs.apiConfig>
