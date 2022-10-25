import { TokenInvalidException } from './../../common/exceptions/token-invalid.exception';
import { HttpCustomMessages } from 'src/common/helpers/exceptions/messages/index.messages';
import { CreateRecoverPasswordDto } from './../../models/recover-password/dto/create-recover-password.dto';
import { UserService } from './../../models/user/user.service';
import { RecoverPasswordEntity } from './../../models/recover-password/entities/recover-password.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfirmTokenDto } from '@models/recover-password/dto/confirm-token.dto';
import { ChangePasswordDto } from '@models/recover-password/dto/change-password.dto';
import { NotFoundException } from 'src/common/exceptions';
import { RecoverException } from 'src/common/exceptions/recover.exception';

@Injectable()
export class RecoverPasswordService {
  constructor(
    @InjectRepository(RecoverPasswordEntity)
    private readonly recoverRepository: Repository<RecoverPasswordEntity>,
    private userService: UserService
  ) {}

  async create(createRecoverPasswordDto: CreateRecoverPasswordDto) {
    try {
      const existsRecover = await this.recoverRepository.findOne({
        where: { email: createRecoverPasswordDto.email }
      });
      if (existsRecover)
        throw new RecoverException(HttpCustomMessages.RECOVER.IN_PROGRESS);

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

    if (!recover)
      throw new RecoverException(HttpCustomMessages.RECOVER.NOT_FOUND);
    if (!(recover.token === confirmTokenDto.token))
      return new TokenInvalidException();

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
    if (!recover)
      throw new RecoverException(HttpCustomMessages.RECOVER.NOT_FOUND);
    if (recover.status !== 'CHANGING')
      throw new RecoverException(
        HttpCustomMessages.RECOVER.PENDING_CONFIRMATION
      );

    const user = await this.userService.findOneOrFail({
      where: { email: changePasswordDto.email }
    });

    if (!user) throw new NotFoundException(HttpCustomMessages.USER.NOT_FOUND);
    await this.recoverRepository.delete({ email: changePasswordDto.email });
    return await this.userService.update(user.id, {
      password: changePasswordDto.password
    });
  }
}
