import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UserModule } from './models/user/user.module';
@Module({
  imports: [
    ConfigModule,
    UserModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
