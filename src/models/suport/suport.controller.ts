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
import { GetCurrentUserId } from 'src/common/decorators';
import { RefreshTokenGuard } from '@guards/refresh-token.guard';

@Controller('suport')
export class SuportController {
	constructor(private readonly suportService: SuportService) {}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	async create(
		@GetCurrentUserId() userId: string,
		@Body() createSuportDto: CreateSuportDto
	) {
		return await this.suportService.create(userId, createSuportDto);
	}

	@UseGuards(RefreshTokenGuard)
	@Get()
	findAll() {
		return this.suportService.findAll();
	}

	@UseGuards(RefreshTokenGuard)
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.suportService.findOneOrFail({ where: { id } });
	}

	@UseGuards(RefreshTokenGuard)
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.suportService.remove(id);
	}
}
