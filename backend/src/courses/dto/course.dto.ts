import { Types } from 'mongoose'
import { IsString } from 'class-validator';


export class CreateCourse{
    
    @IsString()
    name:string;

    @IsString()
    description:string;
    
    @IsString()
    subject:string;
}