import { UserService } from './../../models/user/user.service';
import { RecoverPasswordEntity } from './../../models/recover-password/entities/recover-password.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecoverPasswordService } from './recover-password.service';

@Module({
  imports: [TypeOrmModule.forFeature([RecoverPasswordEntity]), UserService],
  controllers: [],
  providers: [RecoverPasswordService]
})
export class RecoverPasswordModule {}
