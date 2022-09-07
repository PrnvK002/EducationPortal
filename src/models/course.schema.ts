import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Subject } from './subject.schema';


@Schema({ timestamps:true})
export class Course{
    @Prop({ type:String,required:true })
    name:string;

    @Prop({type:String,required:true})
    description:string

    @Prop({type:Types.ObjectId , required:true,ref:'Subject' })
    subject:Subject
}

export const CourseSchema = SchemaFactory.createForClass(Course);