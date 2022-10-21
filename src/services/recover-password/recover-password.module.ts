import { Module } from '@nestjs/common';
import { RecoverPasswordService } from './recover-password.service';

@Module({
  controllers: [],
  providers: [RecoverPasswordService]
})
export class RecoverPasswordModule {}
