import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { Client } from '@notionhq/client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8000);
}
bootstrap();
