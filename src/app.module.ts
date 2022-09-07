import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SubjectController } from './subject/subject.controller';
import { SubjectService } from './subject/subject.service';
import { CoursesController } from './courses/courses.controller';
import { CoursesService } from './courses/courses.service';
import config from './config/key';
import { subjectSchema } from './models/subject.schema';
import { CourseSchema } from './models/course.schema';

@Module({
  imports: [
    MongooseModule.forRoot(config.MONGO_URI),
    MongooseModule.forFeature([
      { name: 'subject', schema: subjectSchema },
      { name: 'course' , schema: CourseSchema }
    ]),
  ],
  controllers: [AppController, SubjectController, CoursesController],
  providers: [AppService, SubjectService, CoursesService],
})
export class AppModule {}
