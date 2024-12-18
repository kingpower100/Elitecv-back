import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CandidatsService } from './candidats.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { Candidate } from './schemas/candidate.schema';

@Controller('candidate')
export class CandidatsController {
  constructor(private readonly candidatsService: CandidatsService) {}

  @Post()
  async create(@Body() createCandidateDto: CreateCandidateDto): Promise<Candidate> {
    return this.candidatsService.create(createCandidateDto);
  }

  @Get('filter/category/:category')
  async filterCandidatesByCategory(@Param('category') category: string): Promise<Candidate[]> {
    return this.candidatsService.filterCandidatesByCategory(category);
  }

 /* @Get('skills')
  async findCandidatesBySkills(@Query('skills') skills: string[]): Promise<Candidate[]> {
    console.log(skills);
    return this.candidatsService.findCandidatesBySkills(skills);
  }*/

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Candidate> {
    return this.candidatsService.findOne(id);
  }

  @Get()
  async findAll(): Promise<Candidate[]> {
    return this.candidatsService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCandidateDto: UpdateCandidateDto): Promise<Candidate> {
    return this.candidatsService.update(id, updateCandidateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.candidatsService.delete(id);
  }
}
