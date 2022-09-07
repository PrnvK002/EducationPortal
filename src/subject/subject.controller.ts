import { Body, Controller, Get , Post } from '@nestjs/common';
import { subject } from './interface/subject.interface';
import { SubjectService } from './subject.service';
import { CreateSubject } from './dto/subject.dto';

@Controller('subject')
export class SubjectController {

    constructor(private readonly subjectService:SubjectService){}

    @Get()
    findAllSubject():Promise<subject[]>{
        return this.subjectService.findAll();
    }

    @Post()
    addSubject(@Body() CreateSubject:CreateSubject):Promise<subject>{
        return this.subjectService.addSubject(CreateSubject);
    }

}
