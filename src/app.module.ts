import { MailerConfigService } from './config/mail/mail.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { UserModule } from './models/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AccessTokenGuard } from '@guards/access-token.guard';
import { ReviewModule } from './models/review/review.module';
import { MailModule } from './services/mail/mail.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local'],
      validationSchema: Joi.object({
        DB_HOST: Joi.string(),
        DB_PORT: Joi.number(),
        DB_USERNAME: Joi.string(),
        DB_PASSWORD: Joi.string(),
        DB: Joi.string(),
        JWT_SECRET: Joi.string(),
        JWT_EXPIRES_IN: Joi.string()
      })
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB'),
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],

        synchronize: true
      })
    }),

    UserModule,
    AuthModule,
    ReviewModule,
    MailModule
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
