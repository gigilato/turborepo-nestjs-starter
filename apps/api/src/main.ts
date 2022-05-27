import { ConfigService } from '@groomie/nest-config'
import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const config = app.get(ConfigService)

  const { port } = config.get('api')

  await app.listen(port, () => {
    Logger.log(
      `
      =====================================================================================
      -> NestJS Api server is running on port ${port} 🚀
      =====================================================================================
      `
    )
  })
}
bootstrap()
