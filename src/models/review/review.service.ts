import { ReviewRepository } from './review.repository';
import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewService {
	constructor(private reviewsRepository: ReviewRepository){}

	async create(userId: string, createReviewDto: CreateReviewDto) {
		const review = await this.reviewsRepository.createAndSaveOnUser(userId, createReviewDto)
		return review
	}

	async findAll() {
		return await this.reviewsRepository.find({
			relations: {
				user: true
			}
		})
	}

	findOne(id: number) {
		return `This action returns a #${id} review`;
	}

	update(id: number, updateReviewDto: UpdateReviewDto) {
		return `This action updates a #${id} review`;
	}

	remove(id: number) {
		return `This action removes a #${id} review`;
	}
}
