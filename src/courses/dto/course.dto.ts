import { Types } from 'mongoose'

export class CreateCourse{
    readonly name:string;
    readonly description:string;
    readonly subject:Types.ObjectId;
}