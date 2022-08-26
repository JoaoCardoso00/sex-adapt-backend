import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  photo_path: string;

  @IsNotEmpty()
  @IsBoolean()
  needStair: boolean;

  @IsNotEmpty()
  @IsBoolean()
  needBar: boolean;

  @IsNotEmpty()
  @IsBoolean()
  needBraille: boolean;

  @IsNotEmpty()
  @IsBoolean()
  needLibra: boolean;

  @IsNotEmpty()
  @IsBoolean()
  needTactilFlooring: boolean;

  @IsNotEmpty()
  @IsBoolean()
  unevenness: boolean;

  @IsNotEmpty()
  @IsBoolean()
  incompatible: boolean;
}
