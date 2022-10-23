import { CreateRecoverPasswordDto } from '@models/recover-password';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { RecoverPasswordService } from '@services/recover-password/recover-password.service';

@Controller('recover')
export class RecoverController {
    constructor(
        private recoverService: RecoverPasswordService
    ) { }

    @Post('recover')
    @HttpCode(HttpStatus.CONTINUE)
    recoverPassword(@Body() recoverPasswordDto: CreateRecoverPasswordDto) {
        return 'Hello';
    }

    @Post('recover/confirm')
    @HttpCode(HttpStatus.OK)
    confirmRecoverPassword(@Body() token: number, @Body() email: string) {
        return 'Hello';
    }

    @Post('recover/changePassword')
    @HttpCode(HttpStatus.OK)
    changePassword(@Body() email: string, @Body() password: string) {
        return 'Hello';
    }
}
