import { Model } from 'mongoose';
import { courseDocument } from '../mongo/schema/course.schema';
import { course } from './interface/course.interface';
export declare class CoursesService {
    private readonly courseModel;
    constructor(courseModel: Model<courseDocument>);
    findCourses(id: string): Promise<course[]>;
    addCourse(data: course): Promise<any>;
}
