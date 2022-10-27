import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
//👌
@Module({
  exports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local'],
      validationSchema: Joi.object({
        DB_HOST: Joi.string().default('localhost'),
        DB_PORT: Joi.number().default('5432'),
        DB_USERNAME: Joi.string().default('postgres'),
        DB_PASSWORD: Joi.string().default('root'),
        DB: Joi.string().default('dev'),
        OAUTH_GOOGLE_ID: Joi.string().required(),
        OAUTH_GOOGLE_SECRET: Joi.string().required(),
        OAUTH_GOOGLE_REDIRECT_URL: Joi.string().required(),
        JWT_SECRET: Joi.string().default('testeteste'),
        JWT_EXPIRES_IN: Joi.string().default('60s')
      })
    })
  ]
})
export class ConfigEnvModule {}
