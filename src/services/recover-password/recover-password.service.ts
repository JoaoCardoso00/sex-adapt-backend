import { CreateRecoverPasswordDto } from './../../models/recover-password/dto/create-recover-password.dto';
import { UserService } from './../../models/user/user.service';
import { RecoverPasswordEntity } from './../../models/recover-password/entities/recover-password.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfirmTokenDto } from '@models/recover-password/dto/confirm-token.dto';
import { ChangePasswordDto } from '@models/recover-password/dto/change-password.dto';

@Injectable()
export class RecoverPasswordService {
  constructor(
    @InjectRepository(RecoverPasswordEntity)
    private readonly recoverRepository: Repository<RecoverPasswordEntity>,
    private userService: UserService
  ) {}

  async create(createRecoverPasswordDto: CreateRecoverPasswordDto) {
    try {
      const recover = this.recoverRepository.create({
        email: createRecoverPasswordDto.email
      });
      return await this.recoverRepository.save(recover);
    } catch (err) {
      return err;
    }
  }

  async confirmToken(confirmTokenDto: ConfirmTokenDto) {
    const recover = await this.recoverRepository.findOne({
      where: {
        email: confirmTokenDto.email
      }
    });

    if (!recover) return { ERROR: 'ERRO' };
    if (!(recover.token === confirmTokenDto.token)) return { ERRO: 'ERRO' };

    return await this.recoverRepository.update(
      { email: confirmTokenDto.email },
      {
        status: 'CHANGING'
      }
    );
  }

  async changePassword(changePasswordDto: ChangePasswordDto) {
    const recover = await this.recoverRepository.findOne({
      where: {
        email: changePasswordDto.email
      }
    });
    if (!(recover.status === 'CHANGING')) {
      const user = await this.userService.findOneOrFail({
        where: { email: changePasswordDto.email }
      });
      if (user) {
        return await this.userService.update(user.id, {
          password: changePasswordDto.password
        });
      }
    }
  }
}
