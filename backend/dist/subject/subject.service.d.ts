import { Model } from 'mongoose';
import { subject } from './interface/subject.interface';
import { subjectDocument } from 'src/mongo/schema/subject.schema';
export declare class SubjectService {
    private readonly subjectModel;
    constructor(subjectModel: Model<subjectDocument>);
    findAll(): Promise<subject[]>;
    addSubject(data: subject): Promise<subject>;
}
