import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type subjectDocument = Subject & Document;

@Schema({ timestamps: true })
export class Subject {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  description: string;
}

export const subjectSchema = SchemaFactory.createForClass(Subject);
