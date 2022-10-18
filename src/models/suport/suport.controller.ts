import { CreateSuportDto } from './dto/create-suport.dto';
import { SuportService } from './suport.service';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards
} from '@nestjs/common';
import { GetCurrentUserId, Public } from 'src/common/decorators';
import { RefreshTokenGuard } from '@guards/refresh-token.guard';
import { AccessTokenGuard } from '@guards/access-token.guard';

@Controller('suport')
export class SuportController {
  constructor(private readonly suportService: SuportService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Public()
  async create(
    @GetCurrentUserId() userId: string,
    @Body() createSuportDto: CreateSuportDto,
  ) {
    return await this.suportService.create(userId, createSuportDto.message);
  }

  @Get()
  findAll() {
    return this.suportService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suportService.findOneOrFail({ where: { id } });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.suportService.remove(id);
  }
}
