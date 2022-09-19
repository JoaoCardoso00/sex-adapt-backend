import { UserModule } from '@models/user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AccessTokenGuard } from './strategies/access-token.strategy';
import { RefreshTokenStrategy } from './strategies/refresh-token.strategy';

@Module({
	imports: [PassportModule, JwtModule.register({}), UserModule],
	controllers: [AuthController],
	providers: [AuthService, AccessTokenGuard, RefreshTokenStrategy]
})
export class AuthModule {}
