import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Groomer, GroomerDocument } from './groomer.schema'

@Injectable()
export class GroomerService {
  constructor(@InjectModel(Groomer.name) public model: Model<GroomerDocument>) {}
}
