import { UserEntity } from '@models/user/entities/user.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewEntity } from './entities/review.entity';
import { DataSource, FindOptionsWhere, Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ReviewRepository extends Repository<ReviewEntity> {
	constructor(
		private dataSource: DataSource,
		private readonly usersRepository: Repository<UserEntity>
	) {
		super(ReviewEntity, dataSource.createEntityManager());
	}

	async createAndSaveOnUser(userId: string, reviewInfo: CreateReviewDto) {
		const review = this.create(reviewInfo);
		const user = await this.usersRepository.findOne({
			where: {
				id: userId
			}
		});

		if (!user) throw new NotFoundException('User was not found');

		user.review.push(review);
		await this.usersRepository.save(user);

		return await this.save(review);
	}
}
