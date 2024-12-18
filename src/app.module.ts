import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CandidatsModule } from './candidates/candidats.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OffreModule } from './offres/offre.module';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/stage', {
     
    }),
    AuthModule,
    UsersModule,
    CandidatsModule,
    OffreModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}