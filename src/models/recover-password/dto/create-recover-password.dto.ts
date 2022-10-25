import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateRecoverPasswordDto {
  @IsString({ message: 'O email precisa ser um texto.' })
  @IsNotEmpty({ message: 'O email é obrigatório.' })
  @IsEmail()
  email: string;
}
