import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class ConfirmTokenDto {
  @IsNotEmpty({ message: 'O e-mail é obrigátoria.' })
  @IsString({ message: 'O e-mail deve ser um texto.' })
  @IsEmail({ message: 'O e-mail é inválido.' })
  email: string;

  @IsNumber()
  @Min(0)
  @Max(9999999)
  token: number;
}
