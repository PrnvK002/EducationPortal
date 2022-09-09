import { Module } from '@nestjs/common';
import { MongoModule } from 'src/mongo/mongo.module';

import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';

@Module({
    imports:[ 
        MongoModule
     ],
    controllers : [ CoursesController ] ,
    providers : [ CoursesService ]
})

export class CourseModule{}