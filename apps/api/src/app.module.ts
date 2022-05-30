import { ConfigModule } from '@groomie/nest-config'
import { OdmModule } from '@groomie/odm'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [ConfigModule.forRoot({ load: ['api'] }), OdmModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
