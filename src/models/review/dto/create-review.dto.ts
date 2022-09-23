import { UserEntity } from '@models/user/entities/user.entity';
import { Type } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsNotEmptyObject, IsNumber, IsObject, IsString, Max, MaxLength, Min, ValidateNested } from 'class-validator';

export class CreateReviewDto {
    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @ValidateNested()
    @Type(() => UserEntity)
    user!: UserEntity;

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
