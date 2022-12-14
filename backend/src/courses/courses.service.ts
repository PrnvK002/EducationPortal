import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course , courseDocument } from '../mongo/schema/course.schema'
import { course } from './interface/course.interface';

@Injectable()
export class CoursesService {
    constructor(@InjectModel(Course.name) private readonly courseModel:Model<courseDocument>){}

    //find all courses of a specific subject
    async findCourses(id:string):Promise<course[]>{
        return await this.courseModel.find({subject:id}).populate('subject','name');
    }

    //add course
    async addCourse(data:course):Promise<any>{
        console.log(data,"data at service");
        
        const newCourse = new this.courseModel({
            name : data.name,
            description: data.description,
            subject : data.subject
        });
        return await newCourse.save();
    }
}
