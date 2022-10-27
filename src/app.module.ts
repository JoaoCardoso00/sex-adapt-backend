import { ReviewModule } from './models/review/review.module';
import { TypeOrmConfigService } from './config/typeorm/typeorm.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UserModule } from './models/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import configEnvConfig from '@config/env/configEnv.config';
@Module({
  imports: [
    ConfigModule.forRoot({ load: [configEnvConfig], isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: TypeOrmConfigService
    }),
    UserModule,
    AuthModule,
    ReviewModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
