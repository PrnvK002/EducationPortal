import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoModule } from './mongo/mongo.module';
import { CourseModule } from './courses/course.module';
import { SubjectModule } from './subject/subject.module';
@Module({
  imports: [
    MongooseModule,
    MongoModule,
    CourseModule,
    SubjectModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
