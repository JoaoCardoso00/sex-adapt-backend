import { CreateUserDto } from './../models/user/dto/create-user.dto';
import { RtGuard } from './../common/guards/rt.guard';
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

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Public()
	@Post('local/signup')
	@HttpCode(HttpStatus.CREATED)
	signup_local(@Body() dto: CreateUserDto): Promise<Tokens> {
		return this.authService.signup_local(dto);
	}

	@Public()
	@Post('local/signin')
	@HttpCode(HttpStatus.OK)
	signin_local(@Body() dto: AuthDto): Promise<Tokens> {
		return this.authService.signin_local(dto);
	}

	@Post('logout')
	@HttpCode(HttpStatus.OK)
	logout(@GetCurrentUserId() userId: string) {
		return this.authService.logout(userId);
	}

	@Public()
	@UseGuards(RtGuard)
	@Post('refresh')
	@HttpCode(HttpStatus.OK)
	refresh_token(
		@GetCurrentUserId() userId: string,
		@GetCurrentUser('refreshToken') refreshToken: string
	) {
		return this.authService.refresh_token(userId, refreshToken);
	}
}
