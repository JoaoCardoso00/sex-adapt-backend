import { CreateRecoverPasswordDto } from '@models/recover-password';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { RecoverPasswordService } from '@services/recover-password/recover-password.service';

@Controller('recover')
export class RecoverController {
  constructor(private recoverService: RecoverPasswordService) {}

  @Post()
  @HttpCode(HttpStatus.CONTINUE)
  recoverPassword(
    @Body() recoverPasswordDto: CreateRecoverPasswordDto,
    @Body() userId: string
  ) {
    return this.recoverService.create(recoverPasswordDto, userId);
  }

  @Post('confirm')
  @HttpCode(HttpStatus.OK)
  confirmRecoverPassword(@Body() token: number, @Body() email: string) {
    return 'Hello';
  }

  @Post('changePassword')
  @HttpCode(HttpStatus.OK)
  changePassword(@Body() email: string, @Body() password: string) {
    return 'Hello';
  }
}
