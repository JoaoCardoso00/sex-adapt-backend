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
  need_ramp: boolean;

  @IsNotEmpty()
  @IsBoolean()
  need_bar: boolean;

  @IsNotEmpty()
  @IsBoolean()
  need_braille: boolean;

  @IsNotEmpty()
  @IsBoolean()
  need_libra: boolean;

  @IsNotEmpty()
  @IsBoolean()
  need_tactile_floor: boolean;

  @IsNotEmpty()
  @IsBoolean()
  affected_by_unevenness: boolean;
}
