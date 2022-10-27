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
  @IsEmail()
  email: string;

  @MinLength(8)
  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
    message: 'passaword is too weak'
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateAccessibilityDto)
  accessibilities: CreateAccessibilityDto;

  hashedRefreshToken: string | null;
}
