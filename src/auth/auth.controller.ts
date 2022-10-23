import { CreateRecoverPasswordDto } from './../models/recover-password/dto/create-recover-password.dto';
import { RecoverPasswordService } from './../services/recover-password/recover-password.service';
import { CreateUserDto } from './../models/user/dto/create-user.dto';
import { RefreshTokenGuard } from './../common/guards/refresh-token.guard';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards
} from '@nestjs/common';
import { Tokens } from './@types/tokens.type';
import {
  Public,
  GetCurrentUserId,
  GetCurrentUser
} from 'src/common/decorators';
import { token } from 'morgan';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private recoverService: RecoverPasswordService
  ) {}

  @Public()
  @Post('local/signup')
  @HttpCode(HttpStatus.CREATED)
  signup_local(@Body() createUserDto: CreateUserDto): Promise<Tokens> {
    return this.authService.signup_local(createUserDto);
  }

  @Public()
  @Post('local/signin')
  @HttpCode(HttpStatus.OK)
  signin_local(@Body() authDto: AuthDto): Promise<Tokens> {
    return this.authService.signin_local(authDto);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@GetCurrentUserId() userId: string) {
    return this.authService.logout(userId);
  }

  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refresh_token(
    @GetCurrentUserId() userId: string,
    @GetCurrentUser('refreshToken') refreshToken: string
  ) {
    return this.authService.updateRefreshToken(userId, refreshToken);
  }

  @Post('recover')
  @HttpCode(HttpStatus.CONTINUE)
  recoverPassword(@Body() recoverPasswordDto: CreateRecoverPasswordDto) {
    return "Hello"
  }

  @Post('recover/confirm')
  @HttpCode(HttpStatus.OK)
  confirmRecoverPassword(@Body() token: number, @Body() email: string) {
    return "Hello"
  }

  @Post('recover/changePassword')
  @HttpCode(HttpStatus.OK)
  changePassword(@Body() email: string, @Body() password: string) {
    return "Hello"
  }
}
