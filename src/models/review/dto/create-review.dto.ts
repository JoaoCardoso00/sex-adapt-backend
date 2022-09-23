import { UserEntity } from '@models/user/entities/user.entity';
import { Type } from 'class-transformer';
import {
	IsDefined,
	IsNotEmpty,
	IsNotEmptyObject,
	IsNumber,
	IsObject,
	IsString,
	Max,
	MaxLength,
	Min,
	ValidateNested
} from 'class-validator';

export class CreateReviewDto {
	@IsNotEmpty()
	@IsNumber()
	@Min(0)
	@Max(5)
	grade: number;

	@IsNotEmpty()
	@IsString()
	@MaxLength(125)
	comment: string;
}
