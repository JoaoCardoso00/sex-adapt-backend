import { UserModule } from '@models/user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AtStrategy } from './strategies/at.strategy';
import { RtStrategy } from './strategies/rt.strategy';

@Module({
	imports: [PassportModule, JwtModule.register({}), UserModule],
	controllers: [AuthController],
	providers: [AuthService, AtStrategy, RtStrategy]
})
export class AuthModule {}
