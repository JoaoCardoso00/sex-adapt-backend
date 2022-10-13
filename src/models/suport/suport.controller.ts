import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuportService } from './suport.service';
import { CreateSuportDto } from './dto/create-suport.dto';
import { UpdateSuportDto } from './dto/update-suport.dto';

@Controller('suport')
export class SuportController {
  constructor(private readonly suportService: SuportService) {}

  @Post()
  create(@Body() createSuportDto: CreateSuportDto) {
    return this.suportService.create(createSuportDto);
  }

  @Get()
  findAll() {
    return this.suportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suportService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSuportDto: UpdateSuportDto) {
    return this.suportService.update(+id, updateSuportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.suportService.remove(+id);
  }
}
