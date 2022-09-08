import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types , Document } from "mongoose";
import { Subject } from './subject.schema';


@Schema({ timestamps:true})
export class Course{
    @Prop({ type:String,required:true })
    name:string;
    
    @Prop({type:String,required:true})
    description:string
    
    @Prop({type:Types.ObjectId , required:true,ref:Subject.name })
    subject:Types.ObjectId
}

export type courseDocument = Course & Document;


export const courseSchema = SchemaFactory.createForClass(Course);