import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan'
import { Request } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  morgan.token('body', (req: Request) => {
  return JSON.stringify(req.body)
  })
  app.use(morgan(':method :url :status\n - :response-time ms -\n :body'))
  await app.listen(3000, () => {
    console.log('Listening on localhost:3000')
  });
}
bootstrap();
