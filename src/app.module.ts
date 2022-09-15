import { UserService } from './models/user/user.service';
import { UserController } from './models/user/user.controller';
import { DatabasesModule } from './config/typeorm/typeorm.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UserModule } from './models/user/user.module';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { join } from 'path';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local'],
      validationSchema: Joi.object({
        DB_HOST: Joi.string().default('localhost'),
        DB_PORT: Joi.number().default('5432'),
        DB_USERNAME: Joi.string().default('postgres'),
        DB_PASSWORD: Joi.string().default('root'),
        DB: Joi.string().default('dev'),
        // OAUTH_GOOGLE_ID: Joi.string().required(),
        // OAUTH_GOOGLE_SECRET: Joi.string().required(),
        // OAUTH_GOOGLE_REDIRECT_URL: Joi.string().required(),
        // JWT_SECRET: Joi.string().default('testeteste'),
        // JWT_EXPIRES_IN: Joi.string().default('60s'),
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
    UserModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {
}
