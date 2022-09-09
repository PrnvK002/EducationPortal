import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { subject } from './interface/subject.interface';
import { Subject , subjectDocument } from 'src/mongo/schema/subject.schema'
// import { CreateSubject } from './dto/subject.dto'
@Injectable()
export class SubjectService {
    constructor(@InjectModel(Subject.name) private readonly subjectModel:Model<subjectDocument>){}

    //finding all the subjects
    async findAll():Promise<subject[]>{
        return await this.subjectModel.find();
    }

    //adding subjects 

    async addSubject(data:subject):Promise<subject>{
        const newSubject = new this.subjectModel({
            name : data.name,
            description : data.description
        });
        return await newSubject.save();
    }

}

