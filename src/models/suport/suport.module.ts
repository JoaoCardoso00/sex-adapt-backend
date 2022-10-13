import { Module } from '@nestjs/common';
import { SuportService } from './suport.service';
import { SuportController } from './suport.controller';

@Module({
  controllers: [SuportController],
  providers: [SuportService]
})
export class SuportModule {}
