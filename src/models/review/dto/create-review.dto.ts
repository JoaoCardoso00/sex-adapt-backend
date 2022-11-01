import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min
} from 'class-validator';

export class CreateReviewDto {
  @IsNotEmpty({ message: 'A nota de avaliação é obrigátoria.' })
  @IsNumber(
    { maxDecimalPlaces: 1 },
    { message: 'A nota de avaliação deve ser um número.' }
  )
  @Min(0, { message: 'A nota de avaliação deve ser maior que 0.' })
  @Max(5, { message: 'A nota de avaliação deve ser menor que 5.' })
  grade: number;

  @IsNotEmpty({ message: 'O comentário é obrigátorio.' })
  @IsString({ message: 'O comentário deve ser um texto.' })
  @MaxLength(125, {
    message: 'O comentário deve ser menor que 125 caracteres.'
  })
  comment: string;

  // @IsNotEmpty()
  // @IsString()
  // establishmentId: string
}
