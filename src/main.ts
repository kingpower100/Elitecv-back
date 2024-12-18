import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for all origins, methods, and headers (adjust based on your needs)
  app.enableCors();

  await app.listen(3000); // Adjust port as needed
}
bootstrap();