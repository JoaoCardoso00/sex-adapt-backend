import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UserModule } from './models/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from 'joi';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { AccessibilityModule } from './models/accessibility/accessibility.module';
import { AccessibilityModule } from './models/accessibility/accessibility.module';
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
		AccessibilityModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
