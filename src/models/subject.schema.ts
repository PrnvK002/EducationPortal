import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({ timestamps:true})
export class Subject{
    @Prop({ type:String,required:true })
    name:string;

    @Prop({type:String,required:true})
    description:string

}

export const subjectSchema = SchemaFactory.createForClass(Subject);
