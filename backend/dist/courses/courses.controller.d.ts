import { CoursesService } from './courses.service';
import { CreateCourse } from './dto/course.dto';
import { course } from './interface/course.interface';
export declare class CoursesController {
    private readonly courseService;
    constructor(courseService: CoursesService);
    findAllCourses(id: string): Promise<course[]>;
    addCourse(createCourse: CreateCourse): Promise<any>;
}
