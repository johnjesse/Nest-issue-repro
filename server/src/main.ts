import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // TOGGLE ON OFF THIS LINE TO SEE THE ISSUE
  app.enableShutdownHooks();
  await app.listen(3000);
}
bootstrap();
