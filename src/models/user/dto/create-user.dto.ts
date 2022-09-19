import { IUserEntity } from '../interfaces';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto implements IUserEntity {
  @IsEmail()
  email: string;

  @MinLength(8)
  @IsString()
  @IsNotEmpty()
  password?: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  hashedRefreshToken: string | null;
}
