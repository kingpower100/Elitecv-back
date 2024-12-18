import { Injectable } from '@nestjs/common';
import { CreateOffreDto } from './dto/create-offre.dto';
import { UpdateOffreDto } from './dto/update-offre.dto';
import { Offre } from './entities/offre.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class OffreService {
  constructor(@InjectModel(Offre.name) private offreModel: Model<Offre>) {}

  create(createOffreDto: CreateOffreDto) {
    const newOffre = new this.offreModel(createOffreDto);
    return newOffre.save();
  }

  async findAll(): Promise<Offre[]> {
    return this.offreModel.find().exec();
  }

  async findOne(id: string): Promise<Offre> {
    return this.offreModel.findById(id).exec();
  }

  async update(id: string, updateOffreDto: UpdateOffreDto): Promise<Offre> {
    return this.offreModel.findByIdAndUpdate(id, updateOffreDto, { new: true }).exec();
  }
  async delete(id: string): Promise<any> {
    return this.offreModel.findByIdAndDelete(id).exec();
  }
}
