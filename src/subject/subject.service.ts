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
        console.log(data,"data at the service");
        // const newSubject = new this.subjectModel(data);
        // return await newSubject.save();
        return this.subjectModel.create(data);
    }

}

