import { subject } from './interface/subject.interface';
import { SubjectService } from './subject.service';
import { CreateSubject } from './dto/subject.dto';
export declare class SubjectController {
    private readonly subjectService;
    constructor(subjectService: SubjectService);
    findAllSubject(): Promise<subject[]>;
    addSubject(createSubject: CreateSubject): Promise<CreateSubject>;
}
