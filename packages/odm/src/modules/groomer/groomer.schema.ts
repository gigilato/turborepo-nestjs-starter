import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose'
import { Document } from 'mongoose'

type Address = {
  street: string
  zipCode: string
  city: string
  country: string
}

@Schema()
export class Groomer {
  @Prop({ required: true })
  name!: string
  @Prop({ required: true })
  phone!: string
  @Prop({
    type: raw({
      street: { type: String },
      zipCode: { type: String },
      city: { type: String },
      country: { type: String },
    }),
    required: true,
  })
  address!: Address
  @Prop({ required: false })
  website?: string
}

export type GroomerDocument = Groomer & Document
export const GroomerSchema = SchemaFactory.createForClass(Groomer)
