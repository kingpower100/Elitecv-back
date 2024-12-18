import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OffreDocument = HydratedDocument<Offre>;

@Schema()
export class Offre {

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  location: string;
}

export const OffreSchema = SchemaFactory.createForClass(Offre);