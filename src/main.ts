import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  await app.listen(port);
  Logger.log(`Application is running on: ${port}`);
}

bootstrap();

// app 모듈 => (등록) => 컨트롤러 => 서비스 객체
