import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { Subject , subjectSchema } from "./schema/subject.schema";
import { Course , courseSchema } from "./schema/course.schema";
import config from '../config/key'

@Module({
    imports:[
        MongooseModule.forRoot(config.MONGO_URI),
        MongooseModule.forFeature([
            { name:Course.name , schema:courseSchema },
            { name:Subject.name , schema: subjectSchema }
        ])
    ],
    exports:[ MongooseModule ]
})

export class MongoModule{}