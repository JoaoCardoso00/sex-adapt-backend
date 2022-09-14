import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabasesModule } from './config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local']
    }),
    DatabasesModule,
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
