import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { subject } from './interface/subject.interface';

@Injectable()
export class SubjectService {
    constructor(@InjectModel('subject') private readonly subjectModel:Model<subject>){}

    //finding all the subjects
    async findAll():Promise<subject[]>{
        return await this.subjectModel.find();
    }

    //adding subjects 

    async addSubject(data:subject):Promise<subject>{
        const newSubject = new this.subjectModel(data);
        return await newSubject.save();
    }

}

