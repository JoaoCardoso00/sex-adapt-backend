import {
	IsNotEmpty,
	IsNumber,
	IsString,
	Max,
	MaxLength,
	Min
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

	// @IsNotEmpty()
	// @IsString()
	// establishmentId: string
}
