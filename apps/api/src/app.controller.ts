import { OdmService } from '@groomie/odm/dist'
import { Controller, Post } from '@nestjs/common'

@Controller('groomer')
export class AppController {
  constructor(private readonly odm: OdmService) {}

  @Post('/')
  async create() {
    const groomer = await this.odm.groomer.model.create({
      name: 'groom',
      phone: '0123456789',
      address: { street: 'string', zipCode: 'string', city: 'string', country: 'string' },
    })
    return groomer
  }
}
