import { Injectable } from '@nestjs/common'
import { GroomerService } from './modules/groomer'

@Injectable()
export class OdmService {
  constructor(public readonly groomer: GroomerService) {}
}
