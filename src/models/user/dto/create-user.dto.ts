import { CreateAccessibilityDto } from './../../accessibility/dto/create-accessibility.dto';
import { IAccessibilityEntity } from '@models/accessibility/interfaces/accessibility.interface';
import {
  IsBoolean,
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  Matches,
  MinLength,
  ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsNotEmpty({ message: 'O e-mail é obrigátoria.' })
  @IsString({ message: 'O e-mail deve ser um texto.' })
  @IsEmail({ message: 'O e-mail é inválido.' })
  email: string;

  @MinLength(8, { message: 'A senha deve contar pelo menos 8 caracteres.' })
  @IsString({ message: 'A senha deve ser um texto.' })
  @IsNotEmpty({ message: 'A senha é obriǵatoria.' })
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
    message: 'A senha é muito fraca.'
  })
  password: string;

  @IsString({ message: 'O nome deve ser um texto.' })
  @IsNotEmpty({ message: 'O nome é obrigátorio.' })
  name: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateAccessibilityDto)
  accessibilities: CreateAccessibilityDto;

  hashedRefreshToken: string | null;
}
