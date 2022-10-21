import { CreateRecoverPasswordDto } from '@models/recover-password/dto/create-recover-password.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RecoverPasswordService {
  create(createRecoverPasswordDto: CreateRecoverPasswordDto) {
    return 'This action adds a new recoverPassword';
  }

  findAll() {
    return `This action returns all recoverPassword`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recoverPassword`;
  }

  update(id: number) {
    return `This action updates a #${id} recoverPassword`;
  }

  remove(id: number) {
    return `This action removes a #${id} recoverPassword`;
  }
}
