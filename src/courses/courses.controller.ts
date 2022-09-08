import { Controller, Get, Param, Post , Body } from '@nestjs/common';
import { CoursesService } from './courses.service'
import { CreateCourse } from './dto/course.dto';
import { course } from './interface/course.interface'

@Controller('course')
export class CoursesController {
    constructor(private readonly courseService:CoursesService){}

    //@route /courses
    //@method GET
    //@desc id of subject which returns courses of a specific subject
    @Get(':id')
    findAllCourses(@Param('id') id:string):Promise<course[]>{
        return this.courseService.findCourses(id);
    }

    //@route /courses
    //@method POST
    //@desc pass courses details and you can add courses 
    @Post()
    addCourse(@Body() createCourse:CreateCourse):Promise<course>{
        console.log(createCourse,"data at the route");

        return this.courseService.addCourse(createCourse);
    }

}
