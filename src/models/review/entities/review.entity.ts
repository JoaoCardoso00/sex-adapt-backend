import { UserEntity } from './../../user/entities/user.entity';
import { IReviewEntity } from './../interfaces/review.interface';
import { BaseEntity } from './../../base/entities/base-entity.entity';
import { Column, ManyToOne } from 'typeorm';

export class ReviewEntity extends BaseEntity implements IReviewEntity {
	@ManyToOne(() => UserEntity, (user) => user.review)
	user: UserEntity;

	@Column()
	grade: number;

	@Column()
	comment: string;
}
