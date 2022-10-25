import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { HttpCustomMessages } from 'src/common/helpers/exceptions/messages/index.messages';

export class CreateRecoverPasswordDto {
  @IsNotEmpty({ message: HttpCustomMessages.VALIDATION.EMAIL.INVALID })
  @IsString({ message: HttpCustomMessages.VALIDATION.EMAIL.INVALID })
  @IsEmail({ message: HttpCustomMessages.VALIDATION.EMAIL.REQUIRED })
  email: string;
}
