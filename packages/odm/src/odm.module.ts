import { ConfigModule, ConfigService, MongoConfig } from '@groomie/nest-config'
import { DynamicModule, Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { GroomerModule } from './modules/groomer'
import { OdmService } from './odm.service'
import { OdmModuleOptions } from './odm.types'

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
        GroomerModule,
      ],
      module: OdmModule,
      global: options.isGlobal,
      providers: [OdmService],
      exports: [OdmService],
    }
  }
}
