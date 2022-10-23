import { UserService } from './../../models/user/user.service';
import { UserEntity } from './../../models/user/entities/user.entity';
import { RecoverPasswordEntity } from './../../models/recover-password/entities/recover-password.entity';
import { Repository } from 'typeorm';
import { CreateRecoverPasswordDto } from '@models/recover-password/dto/create-recover-password.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RecoverPasswordService {
  constructor(
    private readonly recoverRepository: Repository<RecoverPasswordEntity>,
    private userService: UserService
  ) { }

  async create(createRecoverPasswordDto: CreateRecoverPasswordDto, userId: string) {
    const recover = this.recoverRepository.create({
      email: createRecoverPasswordDto.email,
      user: userId as unknown as UserEntity
    })

    return this.recoverRepository.save(recover)
  }

  async confirmToken(token: number, email: string) {
    return (await this.recoverRepository.findOne({
      where: {
        email
      },
      select: ['token']
    })).token === token
  }

  async changePassword(email: string, password: string) {
    const user = await this.userService.findOneOrFail({ where: { email } })

    await this.userService.update(user.id, { password })
    return;
  }
}
