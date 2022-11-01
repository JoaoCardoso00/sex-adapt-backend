import { MailModule } from './services/mail/mail.module';
import { TypeOrmConfigService } from './config/typeorm/typeorm.config';
import { MailerConfigService } from './config/mail/mail.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { UserModule } from './models/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AccessTokenGuard } from '@guards/access-token.guard';
import { ReviewModule } from './models/review/review.module';
import { SuportModule } from './models/suport/suport.module';
import { MailModule } from './services/mail/mail.module';
import { RecoverPasswordModule } from '@providers/recover-password/recover-password.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: TypeOrmConfigService
    }),
    UserModule,
    AuthModule,
    ReviewModule,
    SuportModule,
    MailModule,
    RecoverPasswordModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
