
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CandidatsController } from './candidats.controller';
import { CandidatsService } from './candidats.service';
import { CandidateSchema } from './schemas/candidate.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Candidate', schema: CandidateSchema }])],
  controllers: [CandidatsController],
  providers: [CandidatsService],
})
export class CandidatsModule {}