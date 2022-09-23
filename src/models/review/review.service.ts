import { ReviewEntity } from './entities/review.entity';
import { ReviewRepository } from './review.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { FindOneOptions } from 'typeorm';

@Injectable()
export class ReviewService {
	constructor(private reviewsRepository: ReviewRepository) {}

	async create(userId: string, createReviewDto: CreateReviewDto) {
		const review = await this.reviewsRepository.createAndSaveOnUser(
			userId,
			createReviewDto
		);
		return review;
	}

	async findAll() {
		return await this.reviewsRepository.find({
			relations: {
				user: true
			}
		});
	}

	async findOneOrFail(options: FindOneOptions<ReviewEntity>) {
		try {
			return await this.reviewsRepository.findOneOrFail(options);
		} catch (error) {
			throw new NotFoundException(error.message);
		}
	}

	update(id: string, updateReviewDto: UpdateReviewDto) {
		return `This action updates a #${id} review`;
	}

	remove(id: string) {
		return `This action removes a #${id} review`;
	}
}
