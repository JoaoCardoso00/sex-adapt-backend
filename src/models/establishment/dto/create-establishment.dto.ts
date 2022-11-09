import { CreateAccessibilityDto } from '@models/accessibility/dto/create-accessibility.dto';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDefined,
  IsLatitude,
  IsLongitude,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Matches,
  ValidateNested
} from 'class-validator';

export class CreateEstablishmentDto {
  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => CreateAccessibilityDto)
  accessibilities: CreateAccessibilityDto;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  website: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  address: string;

  @IsBoolean()
  ground_floor_room: boolean;

  // @IsLatitude()
  // latitude: number;

  // @IsLongitude()
  // longitude: number;

  // @IsNotEmpty()
  // @IsString()
  // cover_photo: string;

  // @IsNotEmpty()
  // @IsArray()
  // room_photo: string[];

  @Matches(
    /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/
  )
  landline: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  whatsapp: string;
}
