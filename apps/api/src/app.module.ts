import { ConfigModule } from '@groomie/nest-config'
import { OdmModule } from '@groomie/odm'
import { Module } from '@nestjs/common'
import { AppService } from './app.service'

@Module({
  imports: [ConfigModule.forRoot({ load: ['api'] }), OdmModule.forRoot({ isGlobal: true })],
  providers: [AppService],
})
export class AppModule {}
