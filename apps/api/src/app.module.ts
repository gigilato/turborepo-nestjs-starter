import { ConfigModule } from '@groomie/nest-config'
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: ['apiConfig'] })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
