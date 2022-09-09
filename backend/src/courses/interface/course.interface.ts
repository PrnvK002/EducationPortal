import { Types } from 'mongoose'

export interface course{
    name:string;
    subject:string;
    description:string;
    _id?:string
}