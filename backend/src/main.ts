import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({logger:true})
  );
  app.useGlobalPipes(new ValidationPipe({ whitelist:true }));
  await app.listen(4000);
  console.log(`Application is running on: ${await app.getUrl()}`);

}
bootstrap();
