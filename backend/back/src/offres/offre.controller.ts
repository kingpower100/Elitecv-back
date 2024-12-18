import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateOffreDto } from './dto/create-offre.dto';
import { UpdateOffreDto } from './dto/update-offre.dto';
import { OffreService } from './offre.service';

@Controller('offre')
export class OffreController {
  constructor(private readonly offreService: OffreService) {}

  @Post()
  create(@Body() createOffreDto: CreateOffreDto) {
    return this.offreService.create(createOffreDto);
  }

  @Get()
  findAll() {
    return this.offreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.offreService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOffreDto: UpdateOffreDto) {
    return this.offreService.update(id, updateOffreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.offreService.delete(id);
  }
}
