// src/candidats/candidats.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { DataPositions } from './enums/data.enum';
import { ITPositions } from './enums/it.enum';
import { MarketingPositions } from './enums/marketing.enum';
import { Candidate } from './schemas/candidate.schema';

@Injectable()
export class CandidatsService {
  constructor(@InjectModel('Candidate') private readonly candidateModel: Model<Candidate>) {}

  async filterCandidatesByCategory(category: string): Promise<Candidate[]> {
    let positions: string[] = [];
    console.log("in")
    switch (category.toLowerCase()) {
      case 'it':
        positions = Object.values(ITPositions);
        break;
      case 'data':
        positions = Object.values(DataPositions);
        break;
      case 'marketing':
        positions = Object.values(MarketingPositions);
        break;
      default:
        return [];
    }
    console.log(positions)
    return this.candidateModel.find({ position: { $in: positions } }).exec();
  }

  async findCandidatesBySkills(skills: string[]): Promise<Candidate[]> {
    return this.candidateModel.find({ skills: { $in: skills } }).exec();
  }

  async create(createCandidateDto: CreateCandidateDto): Promise<Candidate> {
    const newCandidate = new this.candidateModel(createCandidateDto);
    return newCandidate.save();
  }

  async findAll(): Promise<Candidate[]> {
    return this.candidateModel.find().exec();
  }

  async findOne(id: string): Promise<Candidate> {
    return this.candidateModel.findById(id).exec();
  }

  async update(id: string, updateCandidateDto: UpdateCandidateDto): Promise<Candidate> {
    return this.candidateModel.findByIdAndUpdate(id, updateCandidateDto, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.candidateModel.findByIdAndDelete(id).exec();
  }
}
