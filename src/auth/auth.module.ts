import { AccessTokenStrategy } from './strategies/access-token.strategy';
import { UserModule } from '@models/user/user.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { RefreshTokenStrategy } from './strategies/refresh-token.strategy';
import { RecoverController } from './recover.controller';

@Module({
  imports: [PassportModule, JwtModule.register({}), UserModule],
  controllers: [AuthController, RecoverController],
  providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy]
})
export class AuthModule {}
