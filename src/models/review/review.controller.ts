import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	HttpCode,
	HttpStatus
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { GetCurrentUserId } from 'src/common/decorators';

@Controller('review')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) { }

	@Post()
	@HttpCode(HttpStatus.CREATED)
	async  create(
		@GetCurrentUserId() userId: string,
		@Body() createReviewDto: CreateReviewDto) {
		return await this.reviewService.create(userId, createReviewDto);
	}

	@Get()
	findAll() {
		return this.reviewService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.reviewService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
		return this.reviewService.update(+id, updateReviewDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.reviewService.remove(+id);
	}
}
