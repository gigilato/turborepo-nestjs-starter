import { ConfigModule, ConfigService, MongoConfig } from '@groomie/nest-config'
import { DynamicModule, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { OdmService } from './orm.service'
import { OdmModuleOptions } from './orm.types'

@Module({})
export class OdmModule {
  static forRoot(options: OdmModuleOptions = {}): DynamicModule {
    return {
      imports: [
        MongooseModule.forRootAsync({
          imports: [ConfigModule.forRoot({ load: ['mongo'] })],
          useFactory: async (config: ConfigService) => {
            const { uri } = config.get<MongoConfig>('mongo')!
            return { uri }
          },
          inject: [ConfigService],
        }),
      ],
      module: OdmModule,
      global: options.isGlobal,
      providers: [OdmService],
      exports: [OdmService],
    }
  }
}
