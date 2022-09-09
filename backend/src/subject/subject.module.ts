import { Module } from '@nestjs/common';

import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';
import { MongoModule } from 'src/mongo/mongo.module';

@Module({
    imports : [ 
        MongoModule
     ],
    controllers : [ SubjectController ] ,
    providers : [ SubjectService ]
})

export class SubjectModule{}