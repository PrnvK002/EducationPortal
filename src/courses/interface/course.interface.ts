import { Types } from 'mongoose'

export interface course{
    name:string;
    subject:Types.ObjectId;
    description:string;
    _id?:string
}