import { TypeOrmConfigService } from './config/typeorm/typeorm.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UserModule } from './models/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AccessTokenGuard } from '@guards/access-token.guard';
import { MailModule } from './services/mail/mail.module';
import { ReviewModule } from './models/review/review.module';
import { SuportModule } from './models/suport/suport.module';
import { RecoverPasswordModule } from '@providers/recover-password/recover-password.module';
import { EstablishmentModule } from './models/establishment/establishment.module';
import { SuggestionService } from './providers/suggestion/suggestion.service';
import { SuggestionModule } from './providers/suggestion/suggestion.module';

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
    EstablishmentModule
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard
    }
  ]
})
export class AppModule {}
