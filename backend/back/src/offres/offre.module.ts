import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Offre, OffreSchema } from './entities/offre.entity';
import { OffreController } from './offre.controller';
import { OffreService } from './offre.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Offre.name, schema: OffreSchema }])],

  controllers: [OffreController],
  providers: [OffreService],
})
export class OffreModule {}
