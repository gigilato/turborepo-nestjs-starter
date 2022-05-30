import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { GroomerService } from './groomer.service'
import { Groomer, GroomerSchema } from './groomer.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: Groomer.name, schema: GroomerSchema }])],
  providers: [GroomerService],
  exports: [GroomerService],
})
export class GroomerModule {}
