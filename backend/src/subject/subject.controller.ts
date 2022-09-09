import { Body, Controller, Get , Post } from '@nestjs/common';
import { subject } from './interface/subject.interface';
import { SubjectService } from './subject.service';
import { CreateSubject } from './dto/subject.dto';
import { Certificate } from 'crypto';

@Controller('subject')
export class SubjectController {

    constructor(private readonly subjectService:SubjectService){}

    @Get()
    findAllSubject():Promise<subject[]>{
        return this.subjectService.findAll();
    }

    @Post()
    addSubject(@Body() createSubject:CreateSubject):Promise<CreateSubject>{
        return this.subjectService.addSubject(createSubject);
    }

}
