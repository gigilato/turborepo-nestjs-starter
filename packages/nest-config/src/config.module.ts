import { DynamicModule, Module } from '@nestjs/common'
import { ConfigModule as NestConfigModule } from '@nestjs/config'
import { ConfigService } from './config.service'
import { ConfigModuleOptions } from './config.types'
import * as configs from './configs'

@Module({})
export class ConfigModule {
  static forRoot(options: ConfigModuleOptions = {}): DynamicModule {
    return {
      imports: [NestConfigModule.forRoot({ load: [configs.apiConfig] })],
      module: NestConfigModule,
      global: options.isGlobal,
      providers: [ConfigService],
      exports: [ConfigService],
    }
  }
}
