import { TypeOrmConfigService } from './config/typeorm/typeorm.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UserModule } from './models/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
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
			useExisting: TypeOrmConfigService
		}),
		UserModule,
		AuthModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
