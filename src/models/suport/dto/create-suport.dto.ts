import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSuportDto {
  @IsString({ message: 'A mensagem deve ser um texto.' })
  @IsNotEmpty({ message: 'A mensagem é obrigatória.' })
  message: string;

  @IsString({message: 'Id do usuário deve ser um texto.'})
  @IsNotEmpty({message: 'Id do usuário é obrigátorio.'})
  userId: string;
}
